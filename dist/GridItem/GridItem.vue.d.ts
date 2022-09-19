declare const _default: import("vue").DefineComponent<{}, {
    props: Readonly<import("vue").ExtractPropTypes<{
        breakpointCols: {
            required: true;
            type: import("vue").PropType<Breakpoints>;
        };
        colNum: {
            required: true;
            type: NumberConstructor;
        };
        containerWidth: {
            required: true;
            type: NumberConstructor;
        };
        h: {
            required: true;
            type: NumberConstructor;
        };
        i: {
            required: true;
            type: import("vue").PropType<string | number>;
        };
        isDraggable: {
            required: true;
            type: BooleanConstructor;
        };
        isResizable: {
            required: true;
            type: BooleanConstructor;
        };
        lastBreakpoint: {
            required: true;
            type: import("vue").PropType<BreakpointsKeys>;
        };
        margin: {
            required: true;
            type: import("vue").PropType<number[]>;
        };
        maxH: {
            default: number;
            type: NumberConstructor;
        };
        maxRows: {
            required: true;
            type: NumberConstructor;
        };
        maxW: {
            default: number;
            type: NumberConstructor;
        };
        minH: {
            default: number;
            type: NumberConstructor;
        };
        minW: {
            default: number;
            type: NumberConstructor;
        };
        observer: {
            default: any;
            type: {
                new (callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
                prototype: IntersectionObserver;
            }[];
        };
        rowHeight: {
            required: true;
            type: NumberConstructor;
        };
        static: {
            default: boolean;
            type: BooleanConstructor;
        };
        useCssTransforms: {
            required: true;
            type: BooleanConstructor;
        };
        w: {
            required: true;
            type: NumberConstructor;
        };
        x: {
            required: true;
            type: NumberConstructor;
        };
        y: {
            required: true;
            type: NumberConstructor;
        };
    }>>;
    emit: (event: "resize" | "move" | "container-resized" | "moved" | "resize-event" | "drag-event" | "resized", ...args: any[]) => void;
    item: import("vue").Ref<HTMLDivElement>;
    emitter: unknown;
    resizableHandleClass: string;
    cols: import("vue").Ref<number>;
    dragEventSet: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<{
        left?: number;
        top?: number;
    }>;
    inner: Inner<number>;
    interactObj: any;
    isDragging: import("vue").Ref<boolean>;
    isResizing: import("vue").Ref<boolean>;
    lastInner: Inner<number>;
    previousInner: Inner<number>;
    resizeEventSet: import("vue").Ref<boolean>;
    resizing: import("vue").Ref<{
        height: number;
        width: number;
    }>;
    style: {
        props: import("vue").CSSProperties;
    };
    classObj: import("vue").ComputedRef<GridItemClasses>;
    isNoTouch: import("vue").ComputedRef<boolean>;
    draggableOrResizableAndNotStatic: any;
    isAndroid: any;
    resizableAndNotStatic: import("vue").ComputedRef<boolean>;
    calcColWidth: () => number;
    calcPosition: (x: number, y: number, w: number, h: number) => GridItemPosition;
    colWidth: any;
    calcWH: (height: number, width: number) => {
        h: number;
        w: number;
    };
    w: any;
    h: any;
    calcXY: (top: number, left: number) => {
        x: number;
        y: number;
    };
    x: any;
    y: any;
    createStyle: () => void;
    pos: any;
    emitContainerResized: () => void;
    styleProps: any;
    prop: any;
    val: any;
    matches: any;
    handleDrag: (event: any) => void;
    position: any;
    newPosition: any;
    parentRect: any;
    clientRect: any;
    coreEvent: any;
    handleResize: (event: any) => void;
    newSize: any;
    setColNum: (colNum: number) => void;
    tryMakeDraggable: () => void;
    tryMakeResizable: () => void;
    selector: any;
    maximum: any;
    minimum: any;
    opts: any;
    onCreate: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
