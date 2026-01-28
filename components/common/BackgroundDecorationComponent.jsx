import React from 'react'

function BackgroundDecorationComponent() {
  // Define line positions to avoid repetition
  const linePositions = [0, 320, 640, 960, 1280]
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-9999] overflow-hidden">
      {/* Container for all decoration lines - only visible on larger screens */}
      <div className="relative w-full h-full flex justify-center">
        {/* Main container with 1280px width */}
        <div className="relative w-[1280px] h-full hidden lg:block">
          {/* Generate all lines dynamically */}
          {linePositions.map((position, index) => (
            <div 
              key={position}
              className={`absolute top-0 h-full w-p opacity-60`}
              style={{ 
                left: `${position}px`,
                borderLeft: '1px dashed #CED7E4',
                borderImage: 'repeating-linear-gradient(to bottom, #CED7E4 0, #CED7E4 8px, transparent 8px, transparent 16px) 1'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BackgroundDecorationComponent
