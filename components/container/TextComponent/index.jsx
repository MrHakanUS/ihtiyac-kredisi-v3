import React from 'react';

function TextComponent({ text }) {
  if (!text || typeof text !== 'string') return null;

  // Keywords to emphasize with <strong>
  const keywords = [
    'ihtiyaç kredisi',
    'konut kredisi',
    'taşıt kredisi',
    'kredi kartı',
    'faizsiz kredi',
    'sıfır faizli kredi',
    'sıfır faiz',
    '0 faizli kredi',
    '0 faiz',
    'emekli promosyonu',
    'mevduat faizi',
    'vadeli mevduat',
    'kredi karşılaştırma',
    'faiz oranları',
    'kredi hesaplama',
    'faiz hesaplama',
    'kredi başvurusu',
    'banka faiz oranları',
    'merkez bankası',
    'kredi notu',
    'findeks',
    'mortgage',
    'kredi',
    'faiz',
    'banka',
    'mevduat',
    'promosyon',
    'taksit',
    'ödeme',
    'vade',
    'komisyon',
  ];

  // Function to detect if a line is a heading
  function isHeading(line, nextLine, prevLine) {
    const trimmed = line.trim();
    if (!trimmed) return false;

    // Exclude lines that are clearly not headings
    const excludePatterns = [
      /^Hey,/i, // Conversational starts
      /^Şöyle/i,
      /^Ama /i,
      /^Çünkü /i,
      /^Ve /i,
      /^İşte /i,
      /geliyor\./, // Ends with specific verbs
      /oluyor\./,
      /yapıyor\./,
      /diyorlar\./,
    ];

    if (excludePatterns.some((pattern) => pattern.test(trimmed))) {
      return false;
    }

    // Strong indicators of headings
    const strongHeadingPatterns = [
      /^[A-ZÇĞİÖŞÜ][^.!]{20,100}:\s*[A-ZÇĞİÖŞÜ]/, // "Title: Subtitle" format
      /Rehberi:?\s*[A-Za-zçğıöşüÇĞİÖŞÜ]/i, // Contains "Rehberi" or "Rehber"
      /^[A-ZÇĞİÖŞÜ].{15,80}[?]$/, // Question as heading
      /^[A-ZÇĞİÖŞÜ][^.!]{20,}:$/, // Ends with colon
      /nedir\??$/i, // Ends with "nedir"
      /nasıl\s+[A-Za-zçğıöşüÇĞİÖŞÜ\s]+\??$/i, // "Nasıl ..." questions
    ];

    if (strongHeadingPatterns.some((pattern) => pattern.test(trimmed))) {
      return trimmed.length < 150;
    }

    // Medium indicators - need additional context
    const mediumHeadingPatterns = [
      /^[A-ZÇĞİÖŞÜ][^.!?]{10,80}$/, // Starts with capital, no end punctuation
      /için\s*$/i, // Ends with "için"
    ];

    // Check if line is short enough to be a heading (not a paragraph)
    const isShortEnough = trimmed.length < 100;

    // Check if next line is empty (typical for headings)
    const nextLineEmpty = nextLine?.trim() === '';

    // Check if previous line is empty (headings usually have space before)
    const prevLineEmpty = prevLine?.trim() === '';

    // For medium patterns, require more context
    if (mediumHeadingPatterns.some((pattern) => pattern.test(trimmed))) {
      return isShortEnough && (nextLineEmpty || prevLineEmpty);
    }

    return false;
  }

  // Function to determine heading level based on context
  function getHeadingLevel(line, index, lines) {
    const trimmed = line.trim();

    // First major heading is h2
    if (index < 3) return 'h2';

    // Question headings are usually h3
    if (trimmed.endsWith('?')) return 'h3';

    // Headings with colon are h2 for major topics, h3 for subtopics
    if (trimmed.endsWith(':')) {
      // If it's at the beginning or after a large gap, it's h2
      let emptyLinesBefore = 0;
      for (let i = index - 1; i >= 0 && i > index - 5; i--) {
        if (lines[i].trim() === '') emptyLinesBefore++;
      }
      return emptyLinesBefore >= 2 ? 'h2' : 'h3';
    }

    // Default to h3
    return 'h3';
  }

  // Function to emphasize keywords in text
  function emphasizeKeywords(textContent) {
    if (!textContent || typeof textContent !== 'string') return textContent;

    let result = textContent;

    // Sort keywords by length (longest first) to avoid partial matches
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

    sortedKeywords.forEach((keyword) => {
      // Escape special regex characters
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Case-insensitive match, but preserve original case
      const regex = new RegExp(`\\b(${escapedKeyword})\\b`, 'gi');

      // Emphasize based on text length and keyword importance
      const maxEmphasis = keyword.length > 10 ? 4 : 5; // Longer phrases: 4, shorter: 5

      // Apply emphasis
      let count = 0;
      result = result.replace(regex, (match) => {
        count++;
        if (count <= maxEmphasis) {
          return `<strong>${match}</strong>`;
        }
        return match;
      });
    });

    return result;
  }

  // Function to render text with HTML
  function renderHTML(html) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  // Split text into lines and process
  const lines = text.split('\n');
  const processedLines = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const nextLine = lines[i + 1] || '';
    const prevLine = i > 0 ? lines[i - 1] : '';
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      processedLines.push({ type: 'empty', key: `empty-${i}` });
      i++;
      continue;
    }

    // Check if this line is a heading
    if (isHeading(line, nextLine, prevLine)) {
      const level = getHeadingLevel(line, i, lines);
      const emphasized = emphasizeKeywords(trimmed);
      processedLines.push({
        type: 'heading',
        level,
        content: emphasized,
        key: `heading-${i}`,
      });
      i++;
      continue;
    }

    // Regular paragraph text
    const emphasized = emphasizeKeywords(line);
    processedLines.push({
      type: 'text',
      content: emphasized,
      key: `text-${i}`,
    });
    i++;
  }

  // Render the processed content
  const content = processedLines.map((item) => {
    if (item.type === 'empty') {
      return <br key={item.key} />;
    }

    if (item.type === 'heading') {
      const HeadingTag = item.level;
      const className =
        item.level === 'h2'
          ? 'text-slate-900 font-semibold text-[18px] leading-[24px] mt-6 mb-3 sm:text-[17px] sm:leading-[23px] md:text-[16px] md:leading-[22px]'
          : item.level === 'h3'
          ? 'text-slate-800 font-semibold text-[16px] leading-[22px] mt-5 mb-2 sm:text-[15px] sm:leading-[21px] md:text-[14px] md:leading-[20px]'
          : 'text-slate-700 font-medium text-[15px] leading-[20px] mt-4 mb-2 sm:text-[14px] sm:leading-[19px] md:text-[13px] md:leading-[18px]';

      return (
        <HeadingTag key={item.key} className={className}>
          {renderHTML(item.content)}
        </HeadingTag>
      );
    }

    return (
      <span key={item.key}>
        {renderHTML(item.content)}
        <br />
      </span>
    );
  });

  return (
    <section className='w-full text-slate-600 font-light text-scroll break-words overflow-y-auto text-[15px] leading-[22px] max-h-[220px] pr-3 sm:text-[14px] sm:leading-[20px] sm:max-h-[200px] sm:pr-4 md:text-[13px] md:leading-[18px] md:max-h-[144px] md:pr-[24px] md:overflow-y-scroll'>
      {content}
    </section>
  );
}

export default TextComponent;
