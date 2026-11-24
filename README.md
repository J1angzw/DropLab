# DropLab 2.2 — Microfluidic Design Studio

One English workspace for T-junction droplets, symmetric flow focusing, resistive mixing trees, six-inlet co-flow diffusion, and programmable dilution banks.

Open `dist/DropLab.html` directly in a modern browser. All code, styles, calculations, diagrams and preset designs are embedded in that single file. No dependency installation, account, CDN or internet calculation service is needed. Reference links require internet only when clicked. Browser-specific local storage can be restricted for local files; use JSON workspace backups for portable records.

The hosted entry is `dist/index.html`, with local ES modules and CSS. The app can save/edit/load candidates, compare current inputs with up to four candidates per module, export concentration outputs and comparison CSVs, export SVG schematics and text summaries, and import/export combined JSON workspaces. It accepts legacy v1 droplet backups. Records remain on the visitor's own browser and are not shared across visitors.

## Droplet operating modes

Both droplet architectures support direct flow input, target equivalent-diameter plus one known phase flow (calculate either Qc or Qd), and two inlet gauge pressures with an optional junction backpressure. Pressure-derived flows use rigid single-phase inlet resistance, with two continuous branches in parallel for symmetric flow focusing. Junction backpressure defaults to 0 kPa and is an assumption, not an inferred value; capillary entry, downstream two-phase losses and tubing are excluded. Numerical, geometry and expanded screening checks apply to the resulting flows. Old v1/v2 records without these fields default to direct flow input.

## Models

- T-junction: low-Ca squeezing scaling and rectangular plug volume. Application screens are Ca < 0.1 and inlet Re < 10; results above the original conservative Ca 0.01 / Re 1 screens are flagged as extrapolation. The model itself has not been validated by changing these limits.
- Flow focusing: reference-point power law. Default coefficients are illustrative and need calibration. Geometry and fluid-property effects on size are not predicted.
- Mixing tree: Kirchhoff rectangular hydraulic resistance network, pressure-directed solute transport with perfectly mixed nodes. A first-mode diffusion score screens mixing but does not alter outlet means. Capillary pressure/fill time are isolated-channel diagnostics, not a network filling simulation.
- Six-inlet co-flow: uniform axial advection plus transverse diffusion, reflecting walls, conservative implicit finite volume (120 transverse cells, 80 axial steps); initial inlet bands preserve solute flux. Sampling bins are not physical outlets. The detailed paper inlet manifold and axial diffusion are excluded.
- Dilution bank: ideal equal-pressure buses and inverse resistance sizing for equal outlet flows. RMSE is an algebraic forward check, not measured accuracy. Bus and bend losses are excluded.

See the in-app Models & references for units, equations, assumptions and source links. Presets are calculated design examples, not experimentally validated fabrication recipes. The two supplied papers' trained neural-network weights were not provided and are not used.

References: Khalghollah et al., Small (2026), DOI 10.1002/smll.73821; Zhang et al., Micromachines (2022), DOI 10.3390/mi13111810; Garstecki et al., Lab Chip (2006), DOI 10.1039/B510841A; Takken & Wille, Sensors (2022), DOI 10.3390/s22145392.

## Build and verify

Run `python3 build-single-file.py /absolute/output/DropLab.html` to recreate the standalone file, then `node --check single-file-check.mjs`.

Run `node test-core.mjs`, `node test-ff.mjs`, `node test-diagram.mjs`, `node test-presets.mjs`, `node test-gradient.mjs`, and `node test-operating-modes.mjs`. These cover independent unit conversions, droplet conservation, rectangular-duct resistance, model limits, physical diagram scale, candidate migration, hydraulic and solute conservation, diffusion bounds and resolution convergence, inverse dilution sizing checked through forward flow calculations, both droplet inversion directions, pressure/flow round trips, parallel FF inlet resistance, backpressure handling, expanded screening limits and legacy migration.

## Interface language / 界面语言
Use **中文 / English** in the left navigation to switch instantly. The browser remembers the choice. Inputs, calculations and user-written candidate names/notes are preserved. Both modules and diagram labels follow the selected language.
