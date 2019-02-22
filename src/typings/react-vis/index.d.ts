declare module 'react-vis' {
    interface XYPlotProps {
        width: number;
        height: number;
    }

    interface XAxisProps {
        on0: boolean;
    }

    interface YAxisProps {
        on0: boolean;
    }

    interface VerticalGridLinesProps {
        tickValues: number[]
    }

    interface HorizontalGridLinesProps {
        tickValues: number[]
    }

    interface LineSeriesProps {
        data: { x: number, y: number }[]
    }

    export const XYPlot: React.ComponentType<XYPlotProps>;
    export const XAxis: React.ComponentType<XAxisProps>;
    export const YAxis: React.ComponentType<YAxisProps>;
    export const VerticalGridLines: React.ComponentType<VerticalGridLinesProps>;
    export const HorizontalGridLines: React.ComponentType<HorizontalGridLinesProps>;
    export const LineSeries: React.ComponentType<LineSeriesProps>;
}