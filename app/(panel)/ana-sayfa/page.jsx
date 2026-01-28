import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { redirect } from 'next/navigation';
import { RiVerifiedBadgeFill, RiUserSettingsLine, RiCalculatorLine, RiCustomerService2Line, RiArrowRightSLine } from 'react-icons/ri';
import { FiTrendingUp, FiBarChart2, FiTarget, FiClock, FiZap, FiFileText } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineMap, HiOutlineLightningBolt } from 'react-icons/hi2';
import Link from 'next/link';

export default async function AnaSayfaPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/giris-yap');
    }

    const { user } = session;
    const isVerified = user?.status === 'active';

    return (
        <div className="flex flex-col gap-6 w-full max-w-[1000px] mx-auto pb-10">

            {/* Welcome Card - Casual & Friendly */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-slate-200">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-sm">
                            <span className="text-2xl font-bold text-white">
                                {(user.firstName || 'K')[0].toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="font-['DM_Sans',sans-serif] text-2xl md:text-3xl font-semibold text-slate-900">
                                Merhaba {user.firstName || 'Kullanıcı'}! 👋
                            </h1>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[15px] text-slate-600 leading-relaxed">
                            Hoş geldin! Sana özel finansal araçlarını hazırladık.<br />
                            Kredi simülasyonu, skor tahmini ve daha fazlasını keşfetmeye hazır mısın?
                        </p>
                    </div>
                </div>
            </div>

            {/* Financial Tools Grid */}
            <div className="flex flex-col gap-4">
                <h2 className="font-['DM_Sans',sans-serif] text-lg font-medium text-slate-900 ml-2">
                    Finansal Araçlar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* 1. Kredi Uygunluk Simülasyonu */}
                    <div className="bg-white rounded-[24px] border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                <HiOutlineChartBar size={24} />
                            </div>
                            <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-slate-900">
                                Kredi Uygunluk Simülasyonu
                            </h3>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] text-slate-600 leading-relaxed">
                            Farklı kredi senaryolarını test edin ve size en uygun teklifleri keşfedin.
                        </p>
                    </div>

                    {/* 2. Skor Tahmini */}
                    <div className="bg-white rounded-[24px] border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                <FiTrendingUp size={24} />
                            </div>
                            <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-slate-900">
                                Skor Tahmini
                            </h3>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] text-slate-600 leading-relaxed">
                            Kişisel kredi skoru tahmini ve gelişim paneli ile finansal durumunuzu izleyin.
                        </p>
                    </div>

                    {/* 3. Onay Olasılığı */}
                    <div className="bg-white rounded-[24px] border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                <HiOutlineMap size={24} />
                            </div>
                            <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-slate-900">
                                Onay Olasılığı
                            </h3>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] text-slate-600 leading-relaxed">
                            Banka bazlı onay olasılığı haritası ile en uygun bankayı bulun.
                        </p>
                    </div>

                    {/* 4. Zamanlama Asistanı */}
                    <div className="bg-white rounded-[24px] border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                <FiClock size={24} />
                            </div>
                            <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-slate-900">
                                Zamanlama Asistanı
                            </h3>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] text-slate-600 leading-relaxed">
                            Kredi başvurusu için en uygun zamanı belirleyin ve şansınızı artırın.
                        </p>
                    </div>

                    {/* 5. Optimizasyon */}
                    <div className="bg-white rounded-[24px] border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                <FiZap size={24} />
                            </div>
                            <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-slate-900">
                                Optimizasyon
                            </h3>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] text-slate-600 leading-relaxed">
                            Kredi teklif optimizasyon motoru ile en iyi şartları yakalayın.
                        </p>
                    </div>

                    {/* 6. Finansal Profil */}
                    <div className="bg-white rounded-[24px] border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                                <FiFileText size={24} />
                            </div>
                            <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-slate-900">
                                Finansal Profil
                            </h3>
                        </div>
                        <p className="font-['Inter',sans-serif] text-[14px] text-slate-600 leading-relaxed">
                            Başvuru geçmişi ve dijital finansal profilinizi görüntüleyin.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
