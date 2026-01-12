'use client';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { cn } from '@/lib/utils';
import { memo } from 'react';

interface TradingViewWidgetProps {
    title?: string;
    scriptURL: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}

const TradingViewWidget =({title, scriptURL, config, height=600, className} : TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptURL, config, height);

  return (
    <div>
        {title && <h3 className="mb-5 text-2xl font-semibold text-gray-100">{title}</h3>}
        <div className={cn("tradingview-widget-container", className)} ref={containerRef}>
            <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }} />
        </div>
    </div>
    
  );
}

export default memo(TradingViewWidget);
