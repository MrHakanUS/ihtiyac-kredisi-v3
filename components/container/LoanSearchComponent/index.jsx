"use client";

import React, { useState, useMemo, useCallback } from "react";
import BreadcrumbComponent from "@/components/common/BreadcrumbComponent";
import SearchBarComponent from "@/components/container/HeroComponent/SearchBarComponent";
import { FaChevronDown, FaChevronUp, FaFilter } from "react-icons/fa";
import ModalComponent from "@/components/common/ModalComponent";
import ReviewsModalContent from "@/components/common/ReviewsModalContent";
import FeaturedButtonComponent from "@/components/common/FeaturedButtonComponent";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import MultiStarComponent from "@/components/common/MultiStarComponent";
import { GrFormNextLink } from "react-icons/gr";
import TextComponent from "../TextComponent";
import {
  generateLoanCards,
  getDefaultLoanParams,
} from "@/utils/loanDataUtils";
import { canonicalBankMap, resolveBankBySlug } from "@/constants/banks";
import BadgeComponent from "@/components/common/BadgeComponent";
import { useGetInterestRatesQuery, useGetSystemStatusQuery } from "@/services/api/hooks";

export function LoanSearchComponent({
  slug,
  showResults = true,
  introText,
  textcontent,
  staticData,
}) {
  const [currentLoanParams, setCurrentLoanParams] = useState(null);
  const { data: apiRates, isLoading: ratesLoading, error: ratesError } = useGetInterestRatesQuery();
  const { data: systemStatus } = useGetSystemStatusQuery();

  // Map slug to credit type for SearchBarComponent
  const getCreditTypeFromSlug = (slug) => {
    switch (slug) {
      case "ihtiyac-kredisi":
      case "kredi-arama":
      case "en-uygun-kredi":
      case "faizsiz-kredi":
      case "faizsiz-kredi-veren-bankalar":
        return "İhtiyaç Kredisi";
      case "konut-kredisi":
        return "Konut Kredisi";
      case "tasit-kredisi":
      case "arac-kredisi":
        return "Taşıt Kredisi";
      default:
        return "İhtiyaç Kredisi";
    }
  };

  const defaultCreditType = getCreditTypeFromSlug(slug);

  function renderMonoZeroIfFaizli(text) {
    if (typeof text !== "string") return text;
    const hasFaizliZero = /(\%?0)\s*faizli/i.test(text);
    if (!hasFaizliZero) return text;
    return text.split(/(0)/).map((part, i) =>
      part === "0" ? (
        <span key={i} className="font-mono">
          0
        </span>
      ) : (
        part
      )
    );
  }

  const labelsBySlug = {
    "kredi-arama": "Kredi Arama",
    "ihtiyac-kredisi": "İhtiyaç Kredisi",
    "konut-kredisi": "Konut Kredisi",
    "tasit-kredisi": "Taşıt Kredisi",
    "mevduat-faizi": "Mevduat Faizi",
    "faizsiz-kredi": "Faizsiz Kredi Arama",
    "faizsiz-kredi-veren-bankalar": "Faizsiz Kredi Veren Bankalar",
    "en-uygun-kredi": "En Uygun Kredi",
    "mortgage-haberleri": "Mortgage Haberleri",
    "emekli-promosyonu": "Emekli Promosyonu",
    "merkez-bankasi-faiz-karari": "Merkez Bankası Faiz Kararı",
    "banka-faiz-oranlari": "Banka Faiz Oranları",
    findeks: "Findeks",
    iban: "IBAN",
    "kredi-basvurusu": "Kredi Başvurusu",
    "vadeli-mevduat": "Vadeli Mevduat",
  };

  const headingsBySlug = {
    "kredi-arama": "Kredi Arama",
    "ihtiyac-kredisi": "20.000 TL, 6 Ay Vadeli İhtiyaç Kredisi",
    "konut-kredisi": "1.000.000 TL, 120 Ay Vadeli Konut Kredisi",
    "tasit-kredisi": "400.000 TL, 48 Ay Vadeli Taşıt Kredisi",
    "mevduat-faizi": "100.000 TL, 32 Gün Vadeli Mevduat Faizi",
    "faizsiz-kredi-veren-bankalar":
      "Faizsiz Kredi Veren Bankalar: Güncel Teklifler",
    "en-uygun-kredi": "En Uygun Kredi: Düşük Maliyetli Teklifler",
    "mortgage-haberleri": "Mortgage Haberleri ve Güncel Konut Kredisi Oranları",
    "emekli-promosyonu": "Emekli Promosyonu: Güncel Banka Kampanyaları",
    "merkez-bankasi-faiz-karari":
      "Merkez Bankası Faiz Kararı ve Kredi Etkileri",
    "banka-faiz-oranlari": "Banka Faiz Oranları: Güncel Tablo ve Analiz",
    findeks: "Findeks Kredi Notu ve Kredi Onayı İlişkisi",
    iban: "IBAN Doğrulama ve Güvenli Para Transferi Rehberi",
    "kredi-basvurusu": "Kredi Başvurusu Adımları ve Evrak Listesi",
    "vadeli-mevduat": "Vadeli Mevduat: Güncel Getiri ve Vade Seçenekleri",
  };

  const breadcrumbItems = [
    { label: "ihtiyackredisi.com", href: "/" },
    { label: labelsBySlug[slug] || "Kredi Arama" },
  ];

  // Dynamic page heading based on current parameters
  const pageHeading = useMemo(() => {
    if (currentLoanParams) {
      const amount = new Intl.NumberFormat("tr-TR").format(
        currentLoanParams.amount
      );
      const term = currentLoanParams.termMonths;
      const creditType = currentLoanParams.creditType;

      return `${amount} TL, ${term} Ay Vadeli ${creditType}`;
    }
    return headingsBySlug[slug] || "Kredi Arama";
  }, [slug, currentLoanParams]);

  // Generate real loan data based on credit type and current parameters
  const defaultParams = getDefaultLoanParams(defaultCreditType);
  const allLoanCards = useMemo(() => {
    const params = currentLoanParams || defaultParams;
    if (staticData) {
      return generateLoanCards(
        defaultCreditType,
        params.amount,
        params.termMonths || params.term,
        null,
        staticData
      );
    }
    return generateLoanCards(
      currentLoanParams?.creditType || defaultCreditType,
      params.amount,
      params.termMonths || params.term,
      apiRates?.ratesMap, // Pass API rates to the generation function
      staticData
    );
  }, [defaultCreditType, currentLoanParams, defaultParams, apiRates]);

  const [selectedBanks, setSelectedBanks] = useState([]);
  const [selectedInterestRates, setSelectedInterestRates] = useState(() => {
    if (slug === "faizsiz-kredi")
      return [{ label: "Sadece %0 Faizli Teklifler", min: 0, max: 0 }];
    return [];
  });
  const [isBankFilterOpen, setIsBankFilterOpen] = useState(true);
  const [isInterestFilterOpen, setIsInterestFilterOpen] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [reviewsModalTitle, setReviewsModalTitle] = useState("");
  const [reviewsModalBankSlug, setReviewsModalBankSlug] = useState(null);

  const banks = useMemo(() => {
    if (apiRates?.rates) {
      // Get unique bank names from API data, filtered by credit type
      const creditType = currentLoanParams?.creditType || defaultCreditType;
      const filteredBanks = apiRates.rates.filter(rate => {
        switch (creditType) {
          case 'İhtiyaç Kredisi':
            return rate.ihtiyac !== null;
          case 'Konut Kredisi':
            return rate.konut !== null;
          case 'Taşıt Kredisi':
            return rate.tasit !== null;
          default:
            return rate.ihtiyac !== null;
        }
      });
      const bankNames = filteredBanks.map(rate => {
        const { bank } = resolveBankBySlug({ slug: rate.bankSlug });
        return bank ? bank.bankName : rate.bankName;
      });
      // Return unique, sorted bank names
      return [...new Set(bankNames)].sort();
    }
    
    // Fallback to static bank list when API data is not available
    const fallbackBanks = Object.values(canonicalBankMap)
      .map(bank => bank.bankName)
      .sort();
    return fallbackBanks;
  }, [defaultCreditType, currentLoanParams, apiRates]);

  // Generate dynamic interest rate ranges based on actual data
  const interestRateRanges = useMemo(() => {
    const rates = allLoanCards
      .map((card) => card.interestRateValue)
      .filter((rate) => rate > 0);
    if (rates.length === 0) return [];

    const minRate = Math.min(...rates);
    const maxRate = Math.max(...rates);

    const ranges = [];

    // Only show 0% filter if there are actually 0% rates
    const hasZeroRate = allLoanCards.some(
      (card) => card.interestRateValue === 0
    );
    if (hasZeroRate || slug === "faizsiz-kredi") {
      ranges.push({ label: "Sadece %0 Faizli Teklifler", min: 0, max: 0 });
    }

    // Create ranges based on actual data
    if (minRate < 3.5) {
      ranges.push({
        label: `En Düşük Faiz (%${minRate
          .toFixed(1)
          .replace(".", ",")} - %3,5)`,
        min: 0,
        max: 3.5,
      });
    }
    if (maxRate > 3.5) {
      ranges.push({ label: `Orta Faiz (%3,5 - %4,5)`, min: 3.5, max: 4.5 });
    }
    if (maxRate > 4.5) {
      ranges.push({ label: `Yüksek Faiz (%4,5+)`, min: 4.5, max: 10 });
    }

    return ranges;
  }, [allLoanCards]);

  function handleBankChange(bankName) {
    setSelectedBanks((prev) =>
      prev.includes(bankName)
        ? prev.filter((b) => b !== bankName)
        : [...prev, bankName]
    );
  }

  function handleInterestRateChange(range) {
    setSelectedInterestRates((prev) => {
      const exists = prev.some((r) => r.label === range.label);
      if (exists) return prev.filter((r) => r.label !== range.label);
      return [...prev, range];
    });
  }

  const filteredCards = useMemo(() => {
    let filtered = [...allLoanCards];
    if (selectedBanks.length > 0) {
      filtered = filtered.filter((card) => {
        const { bank } = resolveBankBySlug({ slug: card.bankSlug });
        return bank && selectedBanks.includes(bank.bankName);
      });
    }
    if (selectedInterestRates.length > 0) {
      filtered = filtered.filter((card) =>
        selectedInterestRates.some((range) => {
          const rate = card.interestRateValue;
          return rate >= range.min && rate <= range.max;
        })
      );
    }
    // Sort by special flags: sponsored > highPoint > state > others
    const prioritized = filtered.map((c, i) => ({ c, i }));
    function getPriority(card) {
      const bank = canonicalBankMap[card.bankSlug];
      if (bank?.sponsored) return 0;
      if (bank?.highPoint) return 1;
      if (bank?.state) return 2;
      return 3;
    }
    prioritized.sort((a, b) => {
      const pa = getPriority(a.c);
      const pb = getPriority(b.c);
      if (pa !== pb) return pa - pb;
      // Stable fallback: preserve initial order
      return a.i - b.i;
    });
    return prioritized.map((x) => x.c);
  }, [selectedBanks, selectedInterestRates, allLoanCards]);

  // Fallback for faizsiz-kredi: if filters yield no result, show default cards
  const displayedCards = useMemo(() => {
    if (
      slug === "faizsiz-kredi" &&
      filteredCards.length === 0 &&
      selectedInterestRates.length === 0
    )
      return allLoanCards;
    return filteredCards;
  }, [slug, filteredCards, allLoanCards, selectedInterestRates]);

  function getBackgroundClass(cardBackground) {
    switch (cardBackground) {
      case "emerald":
        return "bg-emerald-50";
      case "pink":
        return "bg-pink-50";
      case "white":
      case "":
      default:
        return "bg-white";
    }
  }

  function getNumericRating(rating) {
    if (rating === null || rating === undefined) return 0;
    if (typeof rating === "number") return rating;
    const normalized = String(rating).replace(",", ".");
    const value = parseFloat(normalized);
    if (Number.isNaN(value)) return 0;
    return value;
  }

  // Handle parameter changes from SearchBarComponent (memoized to avoid render loop)
  const handleParametersChange = useCallback((params) => {
    setCurrentLoanParams(params);
  }, []);

  return (
    <>
      <main>
        <div className="bg-slate-50">
          <div className="custom-container-1 flex flex-col items-center px-4 pt-[40px]">
            <div className="max-w-[920px] w-full flex justify-center items-center text-center">
              <BreadcrumbComponent items={breadcrumbItems} />
            </div>
            <div className="max-w-[920px] w-full mb-[40px] flex justify-center items-center text-center">
              <h1 className="text-[28px] leading-[32px] font-semibold text-slate-900">
                {pageHeading}
              </h1>
            </div>
            <SearchBarComponent
              defaultCreditType={defaultCreditType}
              onParametersChange={handleParametersChange}
              hideNonPersonalLoans={
                slug === "faizsiz-kredi" ||
                slug === "faizsiz-kredi-veren-bankalar"
              }
            />
            <div className="max-w-[920px] w-full mt-12"></div>
          </div>
        </div>

        {introText && (
          <section className="bg-slate-100">
            <div className="custom-container-1 px-4 py-8 sm:py-10">
              <div className="max-w-[920px] w-full mx-auto">
                <div className="bg-white rounded-[16px] border border-slate-200 p-5 sm:p-6">
                  <div className="prose prose-slate max-w-none">
                    <p className="text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-slate-700">
                      {introText?.split("\n")?.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {showResults && (
          <div className="custom-container-1 py-8">
            {systemStatus?.lastUpdate && (
              <div className="flex justify-end w-full mb-2">
             <p className="text-sm text-slate-500">
              Kredi oranları{" "}
              <span className="font-semibold text-slate-700">
                {new Date(systemStatus.lastUpdate + "Z").toLocaleString("tr-TR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Europe/Istanbul",
                })}
              </span>
              'de güncellendi
            </p>
              </div>
            )}
            <div className="flex flex-col lg:flex-row gap-8 mt-4">
              <div className="w-full lg:w-[280px] lg:flex-shrink-0">
                <div className="lg:hidden mb-4">
                  <button
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                    className="flex items-center justify-center gap-2 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <FaFilter className="w-4 h-4" />
                    <span className="font-medium">Filtrele</span>
                    {(selectedBanks.length > 0 ||
                      selectedInterestRates.length > 0) && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                        {selectedBanks.length + selectedInterestRates.length}
                      </span>
                    )}
                  </button>
                </div>
                <aside
                  className={`w-full ${
                    !isMobileFilterOpen && "hidden lg:block"
                  }`}
                >
                  <div className="lg:sticky lg:top-24">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <button
                          onClick={() => setIsBankFilterOpen(!isBankFilterOpen)}
                          className="flex items-center justify-between w-full p-3 -m-3 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          <h3 className="text-[15px] font-semibold text-slate-900">
                            Banka Filtreleme
                          </h3>
                          {isBankFilterOpen ? (
                            <FaChevronUp className="w-3 h-3 text-slate-500" />
                          ) : (
                            <FaChevronDown className="w-3 h-3 text-slate-500" />
                          )}
                        </button>
                        {isBankFilterOpen && (
                          <div className="space-y-2 max-h-[320px] overflow-y-auto custom-scrollbar mt-4">
                            {ratesLoading ? (
                              <div className="flex items-center justify-center py-4">
                                <div className="flex items-center gap-2">
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-500"></div>
                                  <p className="text-[14px] text-slate-500">Güncel banka verileri yükleniyor...</p>
                                </div>
                              </div>
                            ) : ratesError ? (
                              <div className="flex flex-col items-center justify-center py-4">
                                <p className="text-[14px] text-slate-500 mb-2">Banka verileri yüklenirken hata oluştu</p>
                                <p className="text-[12px] text-slate-400">Statik banka listesi gösteriliyor</p>
                              </div>
                            ) : banks.length === 0 ? (
                              <div className="flex items-center justify-center py-4">
                                <p className="text-[14px] text-slate-500">Bu kredi türü için banka bulunamadı</p>
                              </div>
                            ) : (
                              banks.map((bank, index) => (
                                <label
                                  key={index}
                                  className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 px-2 py-1.5 rounded transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedBanks.includes(bank)}
                                    onChange={() => handleBankChange(bank)}
                                    className="ik-checkbox ik-checkbox-sm"
                                  />
                                  <span className="text-[14px] text-slate-700 select-none">
                                    {bank}
                                  </span>
                                </label>
                              ))
                            )}
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-200"></div>

                      <div className="p-6">
                        <button
                          onClick={() =>
                            setIsInterestFilterOpen(!isInterestFilterOpen)
                          }
                          className="flex items-center justify-between w-full p-3 -m-3 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          <h3 className="text-[15px] font-semibold text-slate-900">
                            Faiz Oranı
                          </h3>
                          {isInterestFilterOpen ? (
                            <FaChevronUp className="w-3 h-3 text-slate-500" />
                          ) : (
                            <FaChevronDown className="w-3 h-3 text-slate-500" />
                          )}
                        </button>
                        {isInterestFilterOpen && (
                          <div className="space-y-2 mt-4">
                            {interestRateRanges.map((range, index) => (
                              <label
                                key={index}
                                className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 px-2 py-1.5 rounded transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedInterestRates.some(
                                    (r) => r.label === range.label
                                  )}
                                  onChange={() => handleInterestRateChange(range)}
                                  className="ik-checkbox ik-checkbox-sm"
                                />
                                <span className="text-[14px] text-slate-700 select-none">
                                  {renderMonoZeroIfFaizli(range.label)}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="bg-slate-50 px-4 py-3 lg:px-6 lg:py-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <p className="text-[13px] text-slate-600">
                            <span className="font-semibold text-slate-900">
                              {displayedCards.length}
                            </span>{" "}
                            sonuç
                          </p>
                          {(selectedBanks.length > 0 ||
                            selectedInterestRates.length > 0) && (
                            <button
                              onClick={() => {
                                setSelectedBanks([]);
                                setSelectedInterestRates([]);
                              }}
                              className="text-[13px] text-orange-600 hover:text-orange-700 font-medium transition-colors"
                            >
                              Temizle
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {ratesLoading ? (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <p className="text-slate-600">Kredi teklifleri yükleniyor...</p>
                </div>
              ) : displayedCards.length > 0 ? (
                displayedCards.map((card, index) => {
                  const searchLabels = [
                    { label: "Faiz Oranı", value: card.interestRate },
                    { label: "Aylık Ödeme", value: card.monthlyPayment },
                    { label: "Toplam Ödeme", value: card.totalPayment },
                  ];

                  return (
                    <div
                      key={index}
                      className={`hover:border-primary transition-all duration-300 ${getBackgroundClass(
                        card.cardBackground
                      )} border border-slate-200 rounded-[24px] px-4 py-4 md:px-[32px] md:py-[20px]`}
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-[24px] w-full">
                        <div className="flex flex-col">
                          <div className="h-10 md:h-[48px] w-auto max-w-[160px] self-start md:self-auto flex items-center">
                            <Image
                              src={card.bankImage}
                              alt={card.bankName}
                              width={300}
                              height={100}
                              className="w-auto max-w-[160px] h-[36px]"
                            />
                          </div>
                          <div className="w-fit mt-[8px]">
                            {(() => {
                              const bank = canonicalBankMap[card.bankSlug];
                              const badge = bank?.state
                                ? "state"
                                : bank?.sponsored
                                ? "sponsor"
                                : bank?.highPoint
                                ? "high"
                                : "none";
                              return <BadgeComponent badge={badge} />;
                            })()}
                          </div>
                        </div>
                        <ul className="w-full md:w-6/12 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-x-[16px] md:flex md:items-center md:justify-between">
                          {searchLabels.map(({ label, value }, labelIndex) => (
                            <li
                              key={label + labelIndex}
                              className="flex flex-col items-start sm:items-center gap-y-[8px]"
                            >
                              <span className="text-slate-600 text-[14px] leading-[18px]">
                                {label}
                              </span>
                              <span className="font-bold text-slate-900 text-[16px] leading-[20px]">
                                {value}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="w-full md:w-3/12 flex justify-stretch md:justify-end">
                          <FeaturedButtonComponent
                            text="Hemen Başvur"
                            href={card.applyUrl}
                            target="_blank"
                            buttonColor={card.buttonColor}
                            addClass="w-full text-center flex justify-center md:block md:w-auto"
                          />
                        </div>
                      </div>

                      {card.features && card.features.length > 0 && (
                        <ul className="flex flex-col py-[24px] border-b border-slate-200 gap-y-[16px]">
                          {card.features.map((feature, fIndex) => (
                            <li
                              key={feature + fIndex}
                              className="flex items-center gap-x-[12px]"
                            >
                              <span className="text-accent">
                                <FaCircleCheck />
                              </span>
                              <span className="text-slate-600 text-[14px] leading-[18px] font-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-[24px]">
                        <div className="flex items-center flex-wrap gap-3 justify-center md:justify-start md:gap-x-[16px]">
                          <MultiStarComponent
                            stars={getNumericRating(card.rating)}
                          />
                          <div className="w-full text-[14px] leading-[18px] text-slate-600 flex items-center gap-x-[4px] justify-center md:justify-start">
                            {card.reviewCount} kişi
                            <span className="text-primary font-semibold">
                              {card.reviewBankName}
                            </span>
                            hakkında
                            <button
                              onClick={() => {
                                setReviewsModalTitle(card.reviewBankName);
                                setReviewsModalBankSlug(card.bankSlug);
                                setIsReviewsModalOpen(true);
                              }}
                              className="font-bold text-accent hover:text-primary transition-all duration-300 ease-in-out flex items-center group cursor-pointer"
                            >
                              <span>yorum yazdı</span>
                              <span className="text-[20px] group-hover:-rotate-45 transition-all duration-300 ease-in-out">
                                <GrFormNextLink />
                              </span>
                            </button>
                          </div>
                        </div>
                        <FeaturedButtonComponent
                          text="Kredi Detayları"
                          type="light"
                          href={`/kredi/${
                            card.bankSlug ? card.bankSlug : ""
                          }?tur=${encodeURIComponent(
                            currentLoanParams?.creditType || defaultCreditType
                          )}&tutar=${
                            currentLoanParams?.amount || defaultParams.amount
                          }&vade=${
                            card.actualTerm ||
                            currentLoanParams?.termMonths ||
                            defaultParams.term
                          }`}
                          addClass="bg-white w-fit mx-auto md:mx-0 md:w-auto"
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <p className="text-slate-600">
                    Seçilen filtrelere uygun kredi bulunamadı.
                  </p>
                </div>
              )}
            </div>
            </div>
          </div>
        )}

        {textcontent && (
          <section className="custom-container-1">
            <TextComponent text={textcontent} />
          </section>
        )}
        <div className="custom-container-1 my-8">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-slate-600">
            <h3 className="font-semibold text-slate-800 mb-2">Güncellik Bilgisi</h3>
            <p>
              ihtiyackredisi.com'da yayınlanan kredi oranları ve kampanya bilgileri, banka ve finans kuruluşlarının kamuya açık kaynaklarından derlenmektedir. Listemiz her gün otomatik olarak güncellenmekte olup, son güncelleme tarihi{" "}
              <span className="font-semibold text-slate-800">
                {systemStatus?.lastUpdate
                  ? new Date(systemStatus.lastUpdate + "Z").toLocaleString("tr-TR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "Europe/Istanbul",
                    })
                  : "bilinmiyor"}
              </span>
              'dir. Bu oranlar genel bilgilendirme amaçlıdır; kesin ve nihai faiz oranları ile koşullar için lütfen ilgili bankanın resmi şubesinden veya web sitesinden teyit alınız.
            </p>
          </div>
        </div>
      </main>

      <ModalComponent
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
        size="custom"
        showCloseButton={true}
        contentClassName=""
        className="!p-8"
      >
        <ReviewsModalContent
          title={reviewsModalTitle}
          overallRating={
            reviewsModalBankSlug
              ? canonicalBankMap[reviewsModalBankSlug]?.reviews?.overallRating
              : undefined
          }
          overallRatings={
            reviewsModalBankSlug
              ? canonicalBankMap[reviewsModalBankSlug]?.reviews?.overallRatings
              : undefined
          }
          userReviews={
            reviewsModalBankSlug
              ? canonicalBankMap[reviewsModalBankSlug]?.reviews?.userReviews
              : undefined
          }
        />
      </ModalComponent>
    </>
  );
}

export default LoanSearchComponent;
