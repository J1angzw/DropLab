# Using DropLab

Open `DropLab.html` in a current desktop browser, or use the hosted website. Choose Droplet generator or Concentration gradient. Enter the fluid and geometry parameters; results and diagrams update automatically. Invalid inputs clear results and block saving. Additional transport, fluid and capillary parameters are in expandable sections.

For droplets, switch between T-junction and symmetric flow focusing. The T-junction schematic scales axial droplet length and transverse dimensions consistently. Flow focusing shows a separate equivalent sphere at the common physical scale; it cannot determine an unprovided downstream channel or confined drop shape. Calibrate reference diameter, ratio, exponent and Qc with your own experiments.

For either droplet architecture, choose an operating mode:

- Flow rates: enter both Qc and Qd.
- Target diameter: enter the equivalent-volume sphere diameter, select which flow to calculate, and enter the other known flow. T-junction axial length is a separate output. Unattainable targets and computed flows outside the numerical range are rejected.
- Pressures: enter inlet gauge Pc and Pd in kPa. Under Junction pressure reference, enter Pj when known; its default is 0 kPa. Both inlet pressures must exceed Pj. Flows are calculated from pressure difference and channel resistance. This excludes capillary jumps, downstream two-phase losses, tubing and wall deformation, so the result is an inlet estimate. FF uses two equal-pressure symmetric continuous branches in parallel.

Switching modes initializes the new inputs from the valid current operating point. Changing geometry, dimensions or fluid properties then recalculates the operating point. Candidate records, summaries and comparisons retain the selected mode and use the resolved flows. The flow-ratio chart is a hypothetical fixed-Qc flow sweep even in pressure or inverse mode.

The application permits Ca < 0.1 and both inlet Reynolds numbers < 10 (10× the previous limits). Points at or above the old Ca 0.01 or Re 1 screens are marked as expanded-range model extrapolation; this is not evidence of experimentally stable breakup. Existing geometry checks still apply.

For gradients:

- Mixing tree: set both inlet flows/concentrations, outlet count, cross-section, base segment length, outlet segment length, and three repeated pitch counts. The solver obtains pressure, branch flow and mixed-node concentration. Hover over schematic edges/nodes for values. The tree's mean concentration does not change when both inlet flows scale equally; the mixing/residence screen does.
- Six-inlet co-flow: enter six flows and concentrations, chamber dimensions, each inlet width and D. The heatmap shows downstream diffusion; the outlet profile compares initial bands with the final transverse distribution. Sampling bins integrate equal chamber widths and do not imply fabricated splitter channels. All-zero flows are rejected.
- Dilution bank: specify reservoir concentrations, outlet count, total flow and equal supply pressure. Choose linear, geometric or custom targets. Custom lists must have exactly N values within the reservoir range; geometric endpoints must be positive. The inverse design returns feed lengths, flow demand, mixing screening and routing-limit status. Insufficient supply pressure is rejected; exceeded routing length is flagged.

Candidate library contains six droplet and four gradient examples on first use. These are calculated examples, not validated experimental recipes. Load a candidate to edit inputs; Save candidate creates a new snapshot. Edit record loads and updates the selected record. Compare at most four saved candidates per module beside current inputs. Restore examples adds only missing stable IDs; it does not replace user records.

Export workspace creates a JSON backup containing both modules, inputs, records, notes and selections. Import merges candidate IDs and restores the saved current inputs. Legacy v1 droplet backups are accepted. Existing same-ID candidates are retained on merge. Export before importing if you need the existing current-input snapshot. There is an 80-record workspace limit and a 2 MB import limit.

Download diagram exports an SVG. Export summary includes all input values, units, current results, assumptions and references. Compare designs exports its table as CSV. The gradient profile has an additional per-output CSV with concentration and flow, plus bank feed lengths and demand.

Records stay in the current browser, not on the server. JSON backups move them between browsers or computers. Local-file storage may be restricted; if the status says storage unavailable, retain a backup. The standalone HTML uses no external scripts, styles, fonts, images or calculation services. Reference hyperlinks require internet only when followed.

Consult Models & references before using estimates to fabricate a chip. Local mixing, capillary synchronization, wetting, tolerances, secondary pressure losses and experimental breakup behavior can differ from these screening models.

## Interface language / 界面语言
Use **中文 / English** in the left navigation to switch instantly. The browser remembers the choice. Inputs, calculations and user-written candidate names/notes are preserved. Both modules and diagram labels follow the selected language.
