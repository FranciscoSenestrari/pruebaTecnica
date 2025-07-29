import React, { ComponentProps } from "react";

export default function Billway({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width="36pt"
      height="36pt"
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid"
      id="svg1"
      inkscape:export-xdpi={96}
      inkscape:export-ydpi={96}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs id="defs1" />

      <metadata id="metadata1">
        {"\nCreated by potrace 1.16, written by Peter Selinger 2001-2019\n"}
      </metadata>
      <g
        transform="matrix(0.04642019,0,0,-0.04642019,-22.850267,62.566878)"
        stroke="none"
        id="g1"
      >
        <path
          d="m 938,1220 c -48,-10 -103,-24 -124,-30 -20,-7 -88,-12 -153,-12 -64,0 -122,-5 -128,-10 -10,-8 -13,-64 -13,-218 0,-115 3,-215 6,-224 3,-8 29,-23 57,-32 61,-20 163,-15 277,15 115,30 210,41 283,34 101,-9 97,-18 97,231 0,155 -3,217 -12,228 -31,40 -151,48 -290,18 z m 222,-100 c 0,-22 -5,-40 -11,-40 -22,0 -69,42 -69,61 0,16 7,19 40,19 40,0 40,0 40,-40 z m -480,-32 c 0,-16 -51,-68 -67,-68 -9,0 -13,14 -13,40 0,40 0,40 40,40 24,0 40,-5 40,-12 z m 246,-24 c 82,-54 61,-197 -32,-220 -71,-18 -140,95 -103,169 16,33 61,67 87,67 12,0 34,-7 48,-16 z m 234,-204 c 0,-40 0,-40 -40,-40 -48,0 -53,18 -15,55 37,38 55,33 55,-15 z M 654,814 c 38,-39 34,-54 -14,-54 -40,0 -40,0 -40,40 0,48 15,52 54,14 z"
          id="path1"
        />
      </g>
    </svg>
  );
}
