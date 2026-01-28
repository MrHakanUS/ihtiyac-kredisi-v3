import React from 'react';

const TitleComponent = ({
  title,
  subtitle,
  addContainerClass = '',
  addTextClass = '',
  addTitleContainerClass = '',
  titleTag: TitleTag = 'h2',
}) => {
  return (
    <div className={`select-none flex flex-col ${addContainerClass}`}>
      <TitleTag
        className={`title-component-clamp leading-[1] font-semibold logo-clip-text py-2 md:whitespace-nowrap ${addTextClass}`}
      >
        {title}
      </TitleTag>
      <p
        className={`logo-clip-text font-regular text-[15px] py-1 ${addTitleContainerClass}`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default TitleComponent;
