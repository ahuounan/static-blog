import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

const aspectRatio = 16 / 9;

interface Props {
  animateRef: MutableRefObject<{ animate?: (animate: boolean) => void }>;
}

export function BackgroundCanvas(props: Props) {
  const { animateRef } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef<boolean>(false);
  const { width, height } = useDimensions(containerRef);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(
    (animate: boolean) => {
      if (canvasRef.current && height && width) {
        const ctx = canvasRef.current.getContext('2d');
        draw(ctx, width, (width ?? 0) / aspectRatio, animate);
      }
    },
    [canvasRef, height, width]
  );

  if (animateRef && animateRef.current) {
    animateRef.current.animate = animate;
  }
  useEffect(() => {
    const handle = setTimeout(() => {
      animate(!hasRun.current);
      hasRun.current = true;
    }, 1500);
    return () => clearTimeout(handle);
  }, [animate]);

  return (
    <div
      key="background-canvas-container"
      ref={containerRef}
      className="relative z-0 w-logo-mobile md:w-logo-desktop inset-0 mx-auto text-center flex items-center overflow-visible">
      <canvas
        key="background-canvas overflow-visible"
        ref={canvasRef}
        role="presentation"
        width={width ?? 0}
        height={(width ?? 0) / aspectRatio}
      />
    </div>
  );
}

function useDimensions(ref: RefObject<HTMLElement>) {
  const [dimensions, setDimensions] = useState<{
    height: number | null;
    width: number | null;
  }>({ height: null, width: null });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setDimensions({
        height: entry.contentRect.height,
        width: entry.contentRect.width
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [ref]);

  return dimensions;
}

function draw(
  ctx: CanvasRenderingContext2D | null,
  width: number,
  height: number,
  animate: boolean
) {
  if (!ctx) {
    return;
  }
  ctx.clearRect(0, 0, width, height);
  const gap = 0.13;
  const y = 0.5;
  const size = 0.05;
  const frames = animate ? 75 : 1;
  pattern(ctx, 0.5 + gap, y, size, frames, width, height);
  pattern(ctx, 0.5 - gap, y, size, frames, width, height);
}

function pattern(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  frames: number,
  width: number,
  height: number
) {
  const points = blueprintFn([x, y], size);
  points.forEach((coord, i) => {
    let current: [number, number] = [width * coord[0], height * coord[1]];
    const nextCoord = points[i + 1];

    if (!nextCoord) {
      return;
    }
    let next: [number, number] = [width * nextCoord[0], height * nextCoord[1]];
    const steps: [number, number] = [
      (next[0] - current[0]) / frames,
      (next[1] - current[1]) / frames
    ];
    line(ctx, current, steps, frames);
  });
}

function line(
  ctx: CanvasRenderingContext2D,
  from: [number, number],
  steps: [number, number],
  count: number
) {
  if (count <= 0) {
    return;
  }

  const next: [number, number] = [from[0] + steps[0], from[1] + steps[1]];

  ctx.beginPath();
  ctx.moveTo(...from);
  ctx.lineTo(...next);
  ctx.strokeStyle = '#f7050266';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();

  requestAnimationFrame(() => {
    line(ctx, next, steps, count - 1);
  });
}

const blueprintFn = (o: [number, number], s: number) => [
  [o[0] - 6 * s, o[1] + 0 * s],
  [o[0] - 5 * s, o[1] + 1 * s],
  [o[0] + 1 * s, o[1] - 5 * s],
  [o[0] + 2 * s, o[1] - 4 * s],
  [o[0] - 4 * s, o[1] + 2 * s],
  [o[0] - 3 * s, o[1] + 3 * s],
  [o[0] + 3 * s, o[1] - 3 * s],
  [o[0] + 4 * s, o[1] - 2 * s],
  [o[0] - 2 * s, o[1] + 4 * s],
  [o[0] - 1 * s, o[1] + 5 * s],
  [o[0] + 5 * s, o[1] - 1 * s],
  [o[0] + 6 * s, o[1] + 0 * s],
  [o[0] + 5 * s, o[1] + 1 * s],
  [o[0] - 1 * s, o[1] - 5 * s],
  [o[0] - 2 * s, o[1] - 4 * s],
  [o[0] + 4 * s, o[1] + 2 * s],
  [o[0] + 3 * s, o[1] + 3 * s],
  [o[0] - 3 * s, o[1] - 3 * s],
  [o[0] - 4 * s, o[1] - 2 * s],
  [o[0] + 2 * s, o[1] + 4 * s],
  [o[0] + 1 * s, o[1] + 5 * s],
  [o[0] - 5 * s, o[1] - 1 * s],
  [o[0] - 6 * s, o[1] + 0 * s]
];
