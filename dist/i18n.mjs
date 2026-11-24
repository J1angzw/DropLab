// Dictionary-based presentation translation; calculation inputs and record values stay unchanged.
const UI_LANGUAGE_KEY='droplab.language.v1';
let uiLanguage='en';
const uiPairs=`
MICROFLUIDIC STUDIO|微流控设计工作台
DESIGN WORKSPACE|设计工作区
Design modules|设计模块
Droplet generator|液滴产生器
T-junction & flow focusing|T 型交汇与流动聚焦
Concentration gradient generator|浓度梯度产生器
Concentration gradient|浓度梯度
Mixing, diffusion & dilution|混合、扩散与稀释
Candidate library|候选方案库
Models & references|模型与参考文献
Saved in this browser|已保存在当前浏览器
Storage unavailable · export backup|本地保存不可用，请导出备份
Design, compare, refine.|设计、对比、优化。
Engineering estimates for early design.|用于初步设计的工程估算。
WORKSPACE|工作区
Export workspace|导出工作区
Import|导入
MICROFLUIDIC DESIGN TOOLKIT|微流控设计工具集
Turn flow rates and channel dimensions into a considered starting point.|根据流量与流道尺寸，建立可比较的初始设计。
Shape a concentration profile. Explore the flow, geometry and diffusion behind it.|设计浓度分布，探索流量、几何结构和扩散的影响。
＋ Save candidate|＋ 保存候选方案
Save candidate|保存候选方案
Design inputs|设计参数
Reset|重置
Chip architecture|芯片结构
T-junction|T 型交汇
Flow focusing|流动聚焦
Squeezing model|挤压成滴模型
Reference power law|参考点幂律模型
Operating mode|输入模式
Flow rates|流量输入
Flow input|流量输入
Target diameter|目标直径
Pressures|压力输入
Pressure input|压力输入
Inverse design|直径反算
Flow to calculate|需要反算的流量
Calculate Qd · hold Qc|反算 Qd，已知 Qc
Calculate Qc · hold Qd|反算 Qc，已知 Qd
Target & known flow|目标直径与已知流量
Target equivalent diameter · d_eq|目标等体积球直径 · d_eq
Known continuous flow · Qc|已知连续相流量 · Qc
Known total continuous flow · Qc|已知连续相总流量 · Qc
Known dispersed flow · Qd|已知分散相流量 · Qd
d_eq is the diameter of a sphere with the same volume. It is not T-junction axial length or confined droplet width.|d_eq 指相同体积球体的直径，不是 T 型液滴的轴向长度或受限宽度。
Inlet pressures · gauge|入口表压
Continuous inlet pressure · Pc|连续相入口压力 · Pc
Dispersed inlet pressure · Pd|分散相入口压力 · Pd
Junction pressure reference|交汇处压力参考
Junction backpressure · Pj|交汇处背压 · Pj
Default Pj = 0 kPa gauge. Enter actual junction backpressure when known. Each inlet pressure must exceed Pj.|默认 Pj = 0 kPa 表压；如已知实际交汇处背压，请填写。两相入口压力均须大于 Pj。
Flows are calculated from Pin − Pj and inlet resistance. Downstream two-phase losses, capillary pressure jumps and tubing are not included.|根据 Pin − Pj 和入口支路阻力计算流量，不包含下游两相流损失、毛细压力跃变与外接管路阻力。
Continuous phase · Qc|连续相流量 · Qc
Continuous · total Qc|连续相总流量 · Qc
Dispersed phase · Qd|分散相流量 · Qd
Operating point|当前工作点
Calculated operating point|计算得到的工作点
Qc · total|Qc · 连续相总流量
Inlet ΔPc / ΔPd|入口压降 ΔPc / ΔPd
Target d_eq|目标 d_eq
Operating point unavailable until the inputs are valid.|请修正输入后查看工作点。
Channel dimensions|流道尺寸
Main width · wc|主流道宽度 · wc
Summed side widths · wc|两侧入口总宽 · wc
Dispersed inlet · wd|分散相入口宽度 · wd
Common depth · h|共同深度 · h
Continuous inlet length|连续相入口长度
Dispersed inlet length|分散相入口长度
Empirical reference · calibrate first|经验参考参数 · 使用前标定
Reference diameter|参考球直径
Reference Qd/Qc|参考流量比 Qd/Qc
Exponent · b|幂律指数 · b
Reference total Qc|参考连续相总流量 Qc
Fluid properties & model settings|流体物性与模型设置
Continuous viscosity|连续相动力黏度
Dispersed viscosity|分散相动力黏度
Continuous density|连续相密度
Dispersed density|分散相密度
Interfacial tension|界面张力
T-junction coefficient · α|T 型几何系数 · α
Application screens: Ca < 0.1 · Re_c < 10 · Re_d < 10.|应用筛选条件：Ca < 0.1，Re_c < 10，Re_d < 10。
Above Ca 0.01 or Re 1, size is marked as expanded-range extrapolation.|Ca 达到 0.01 或 Re 达到 1 时，尺寸结果将标为扩大范围的模型外推。
Symmetric continuous inlets: Qc is total flow, wc is summed width, lc is one branch length. Reference coefficients need calibration.|对称连续相入口：Qc 为两侧总流量，wc 为两侧宽度之和，lc 为单侧长度。参考系数需标定。
Immiscible Newtonian fluids, rigid channels and continuous-phase wall wetting are assumed.|假设两相互不相溶、均为牛顿流体，流道为刚性，连续相优先润湿壁面。
LIVE SCHEMATIC|实时示意图
Chip & flow overview|芯片与流动概览
Flow ratio · Qd/Qc|流量比 · Qd/Qc
Total inlet flow|总入口流量
Inlet Re · c / d|入口 Re · 连续相 / 分散相
Equivalent diameter · estimate|等体积球直径 · 估算
Drop volume · estimate|单滴体积 · 估算
Generation frequency|液滴生成频率
Capillary number · Ca|毛细数 · Ca
Rectangular plug approximation|矩形液塞体积近似
Unconfined equivalent sphere|非受限等体积球
Dispersed volume conservation|分散相体积守恒
Expanded screen < 0.1|扩大后的筛选上限 < 0.1
PARAMETER RESPONSE|参数响应
Flow-ratio sensitivity|流量比敏感性
Flow-rate sensitivity|流量敏感性
Supply-pressure sensitivity|供压敏感性
Current design|当前设计
Equivalent diameter (µm)|等体积球直径（µm）
Qd / Qc · Qc fixed|Qd / Qc · 固定 Qc
Hypothetical flow sweep: dispersed flow changes at the resolved Qc; pressure/target controls are not held fixed. Valid expanded-range points are extrapolations.|假设性流量扫描：固定当前计算得到的 Qc，改变分散相流量；不维持压力或目标直径约束。扩大范围内的结果属于模型外推。
Hypothetical flow sweep at resolved Qc, independent of current input mode. Reference-point empirical response; calibrate before use. Geometry and fluid-property size effects are not modeled.|固定当前计算得到的 Qc 进行假设性流量扫描，与当前输入模式独立。曲线基于参考点经验模型，需先标定；未计算几何和物性对尺寸的影响。
Only valid model points are plotted.|仅绘制有效模型点。
SIDE BY SIDE|方案并列对比
Compare designs|方案对比
Choose candidates|选择候选方案
Export CSV ↓|导出 CSV ↓
Current inputs and up to four saved candidates from this module.|对比当前参数与本模块中最多四个已保存方案。
Parameter / result|设计参数 / 计算结果
Unit|单位
Architecture|芯片结构
Target diameter · inverse mode|目标直径 · 反算模式
Unknown flow · inverse mode|待求流量 · 反算模式
Inlet gauge pressure Pc / Pd · pressure mode|入口表压 Pc / Pd · 压力模式
Junction backpressure · pressure mode|交汇处背压 · 压力模式
Continuous flow|连续相流量
Dispersed flow|分散相流量
Main / summed side width|主流道宽度 / 两侧入口总宽
Dispersed inlet width|分散相入口宽度
Channel depth|流道深度
Continuous / dispersed inlet length|连续相 / 分散相入口长度
Viscosity · continuous / dispersed|动力黏度 · 连续相 / 分散相
Density · continuous / dispersed|密度 · 连续相 / 分散相
Geometry coefficient α|几何系数 α
Axial length|轴向长度
Equivalent diameter|等体积球直径
Drop volume|单滴体积
Frequency|生成频率
Capillary number|毛细数
Inlet ΔP · c / d|入口压降 · 连续相 / 分散相
Reference d / q / b · FF|参考 d / q / b · 流动聚焦
Reference total Qc · FF|参考连续相总流量 · 流动聚焦
Screening / calibration|筛选 / 标定状态
Size suppressed|不输出尺寸
Empirical · calibrate|经验估算 · 需标定
Expanded · extrapolated|扩大范围 · 外推
Original screen · validate|原筛选范围 · 待验证
DESIGN RECORD|设计记录
Design summary|设计摘要
Download diagram ↓|下载图示 ↓
Export summary ↓|导出摘要 ↓
Input corrections required|请修正输入
Size model outside screening range|尺寸模型超出筛选范围
Expanded range · model extrapolation|扩大范围 · 模型外推
Original conservative screen passed · validate experimentally|通过原保守筛选 · 需实验验证
Empirical estimate · calibration required|经验估算 · 需标定
Validate with simulation and experiment.|请通过仿真和实验验证。
DESIGN RECORDS|设计方案记录
Droplets|液滴方案
Gradients|梯度方案
Restore examples|恢复预设方案
Select up to four designs per module. Records stay in this browser; export a workspace backup to transfer them.|每个模块最多选择四个方案对比。记录保存在当前浏览器；可导出工作区备份进行迁移。
Save current design|保存当前设计
Design name|方案名称
Design notes|设计备注
Cancel|取消
Close candidate library|关闭候选方案库
Close save dialog|关闭保存窗口
Close model information|关闭模型说明
Load design ↗|载入设计 ↗
Edit record|编辑记录
Remove|移除
example|示例
e.g. Six-outlet mixing tree|例如：六出口树状混合网络
Purpose, assumptions, next experiment…|设计目的、假设条件、下一步实验……
Candidate saved.|候选方案已保存。
Candidate updated.|候选方案已更新。
Candidate loaded into current inputs.|已将候选方案载入当前参数。
Candidate removed. Use workspace backups to preserve portable records.|候选方案已移除。建议导出工作区备份保存记录。
Current inputs reset. Saved candidates are unchanged.|当前参数已重置，已保存方案保持不变。
Select up to four candidates per module.|每个模块最多选择四个候选方案。
Correct the inputs before saving.|请修正输入后再保存。
The workspace holds 80 candidates. Remove a record or export a backup.|工作区最多保存 80 个候选方案，请移除部分记录或导出备份。
No candidates yet. Save a design or restore examples.|暂无候选方案，请保存设计或恢复预设。
Stored data could not be read. Defaults are loaded; import a JSON backup to recover records.|无法读取已保存的数据，已载入默认参数；可导入 JSON 备份恢复记录。
Backups must be smaller than 2 MB.|备份文件须小于 2 MB。
Use a valid DropLab v1 or v2 JSON workspace backup.|请使用有效的 DropLab v1 或 v2 JSON 工作区备份。
Current design parameters in the backup are invalid.|备份中的当前设计参数无效。
The backup has invalid or duplicate candidate records.|备份包含无效或重复的候选记录。
The merged workspace exceeds 80 records. Remove candidates first.|合并后将超过 80 条记录，请先移除部分候选方案。
Invalid candidate selections.|候选方案选择数据无效。
This file is not valid JSON.|此文件不是有效的 JSON。
Import failed.|导入失败。
Mixing tree|树状混合网络
Hydraulic network|液阻网络
Six-inlet co-flow|六入口共流扩散
Advection + diffusion|对流与扩散
Dilution bank|稀释支路网络
Target to resistance|由目标反算阻力
Resistive mixing tree|液阻树状混合网络
Programmable dilution bank|可编程稀释支路网络
Feed conditions|入口条件
Reservoir A flow|储液池 A 流量
Reservoir B flow|储液池 B 流量
Reservoir A concentration|储液池 A 浓度
Reservoir B concentration|储液池 B 浓度
Network geometry|网络几何参数
Outlet count|出口数量
Channel width|流道宽度
Base segment length|基础流道段长度
Outlet channel length|出口段长度
Added length per pitch|每个折返增加的长度
Row pitch · P1|行折返数 · P1
Row pitch · P2|行折返数 · P2
Row pitch · P3|行折返数 · P3
Six inlet conditions|六个入口的条件
INLET|入口
FLOW · µL/min|流量 · µL/min
CONC. · mM|浓度 · mM
Reactive chamber|反应腔室
Chamber width|腔室宽度
Chamber length|腔室长度
Each inlet width|各入口宽度
Outlet sampling bins|出口采样区数量
Target & supply|目标与供给
Total outlet flow|出口总流量
Equal supply pressure|共同供给压力
Target profile|目标浓度分布
Linear between endpoints|端点间线性分布
Geometric between endpoints|端点间等比分布
Custom concentration levels|自定义浓度序列
Target levels · mM|目标浓度序列 · mM
Custom target concentrations|自定义目标浓度
Channel & routing|流道与布线
Feed / mixer width|进料 / 混合段宽度
Common depth|共同深度
Mixing channel length|混合段长度
Max routed feed length|进料支路长度上限
Transport & fluid properties|输运与流体物性
Diffusion coefficient · D|扩散系数 · D
Dynamic viscosity|动力黏度
Fluid density|流体密度
Isolated-channel capillary screen|单流道毛细驱动估算
Uniform contact angle|统一接触角
Surface tension|表面张力
degrees|度
Isolated-channel screening only; the network is driven by imposed flow.|仅估算单流道毛细驱动；上方网络按指定入口流量求解。
Steady imposed flow and perfectly mixed nodes. Width, depth, pitch and outlet count update the hydraulic network.|假设稳态指定流量、节点完全混合；宽度、深度、折返数和出口数量会联动更新液阻网络。
Six parallel inlet bands in one chamber. Concentration mM = mol/m³. Sampling bins are mathematical regions, not splitter branches.|单腔室内六股并行入口流；浓度单位 mM = mol/m³。采样区为数学分区，不代表实际分流支路。
Targets and total flow determine feed resistance and length. Two ideal equal-pressure supply buses are assumed.|由目标浓度和总流量确定进料阻力及长度，假设两条理想等压供给总线。
Mean concentration|平均浓度
Flow-weighted across outputs|按出口流量加权
Diffusion mixing score|扩散混合指标
Diffusion screening score|扩散筛选指标
Mean residence time|平均停留时间
Mixing channel only|仅混合段
Active volume / total flow|有效流道体积 / 总流量
Chamber length / mean speed|腔室长度 / 平均速度
Longest required feed|所需最长进料支路
Pressure indicator|压力指标
Largest inlet pressure|最大入口压力
Chamber-only pressure drop|仅腔室内压降
Within routed length limit|未超过布线长度上限
Routing limit exceeded|超过布线长度上限
Outputs / sampling bins|出口 / 采样区数量
Reynolds number|雷诺数
SPATIAL DISTRIBUTION|空间浓度分布
Outlet concentration profile|出口浓度分布
Transverse concentration profile|横向浓度分布
Export outlet CSV ↓|导出出口 CSV ↓
Concentration (mM)|浓度（mM）
Position across chamber (µm)|腔室横向位置（µm）
Outlet index|出口编号
Solid: outlet profile · dashed: inlet bands|实线：出口分布；虚线：入口浓度带
Outlet|出口
Bin / outlet|采样区 / 出口
A feed (mm)|A 支路长度（mm）
B feed (mm)|B 支路长度（mm）
Closed|关闭
closed|关闭
Outlets / sampling bins|出口 / 采样区数量
Channel / chamber width|流道 / 腔室宽度
Diffusion coefficient|扩散系数
Flow-weighted mean|流量加权平均浓度
Output concentration levels|各出口浓度
Residence indicator¹|停留时间指标¹
Mixing / screening score¹|混合 / 筛选指标¹
Pressure indicator¹|压力指标¹
Longest required feed · bank|所需最长进料支路 · 稀释网络
Ideal target RMSE · bank|理想目标均方根误差 · 稀释网络
Routing limit · bank|布线长度限制 · 稀释网络
Within limit|未超限
Exceeded|已超限
Ideal target balance solved · validate mixing and routing|已求解理想浓度配比 · 请验证混合与布线
Ideal balance solved · routing limit exceeded|已求解理想配比 · 布线长度超限
Screening calculation complete · validate local transport|筛选计算完成 · 请验证局部输运
Total flow / current flow · inlet ratios fixed|总流量 / 当前总流量 · 入口比例固定
Supply pressure / current pressure|供给压力 / 当前供给压力
Longest required feed (mm)|所需最长进料支路（mm）
Diffusion score (%)|扩散指标（%）
Flow and targets remain fixed. Feed lengths are re-sized at each pressure; insufficient-pressure points are omitted.|固定流量和目标浓度，在各供压下重新计算进料支路长度；省略压力不足的点。
All inlet flows scale together. Ideal mixed-node concentrations stay unchanged; residence and diffusion screening change.|所有入口流量同比例变化；理想混合节点的浓度保持不变，停留时间和扩散筛选指标随之改变。
All inlet flows scale together at fixed concentrations and geometry. Faster flow leaves less time for diffusion. Sweep resolution: 72 transverse cells.|固定浓度和几何结构，所有入口流量同比例变化；流速越高，扩散时间越短。扫描采用 72 个横向网格单元。
Correct the highlighted inputs to generate a design summary.|请修正标出的输入，再生成设计摘要。
Correct the inputs before using the design results.|请修正输入后再使用计算结果。
Correct the inputs. Results have been cleared.|请修正输入，当前结果已清空。
Invalid inputs|输入无效
Correct the parameters to update the schematic|请修正参数后查看联动图示
No size estimate under these conditions|当前条件不输出尺寸估算
Equivalent-volume sphere|等体积球展示区
Unconfined; outlet shape not modeled|非受限展示；不预测出口内形状
Main cross-section|主流道截面
One continuous inlet cross-section|单侧连续相入口截面
same scale|统一比例尺
Inlet lengths abbreviated|入口长度已截断
parameter-linked schematic|参数联动示意图
Cross-section shows depth.|截面显示深度。
size model unavailable|尺寸模型不可用
axial length|轴向长度
equivalent diameter|等体积球直径
T axial length|T 型轴向长度
6 inlets → flow-weighted bands → advection + diffusion|六入口 → 按流量分配浓度带 → 对流与扩散
Concentration color scale · lengths abbreviated|浓度色标 · 流道长度已截断
Feed lengths A / B (mm). Meanders indicate resistance; routing is illustrative, not a fabrication mask.|A / B 进料段长度（mm）。折返表示阻力大小；布线仅为示意，不是加工掩模。
Aspect ratio bounded for legibility; sampling bins are not physical outlets.|为便于阅读，长宽比经过限制；采样区不代表实体出口。
depth section at right.|右侧为深度截面。
Row lengths|各行长度
pitch count|折返数
repeated.|按行重复。
mean residence|平均停留时间
Inlet width|入口宽度
Outlet segment|出口段
signed down the rows|以沿行向下为正方向
Small T-junction|小尺度 T 型方案
Reference T-junction|基准 T 型方案
Higher-frequency T-junction|较高频率 T 型方案
Larger-volume T-junction|较大体积 T 型方案
Flow-focusing reference|基准流动聚焦方案
Flow-focusing low flow|低流量流动聚焦方案
Six-outlet mixing tree|六出口树状混合网络
Eight-outlet slow-flow tree|八出口低流量树状网络
Six-inlet paper example|六入口论文参数示例
Programmable six-level bank|可编程六级稀释网络
60 × 30 µm main channel. Model screening passed; not experimentally validated.|主流道为 60 × 30 µm。通过模型筛选，尚未做实验验证。
100 × 50 µm reference geometry. Model screening passed; not experimentally validated.|基准几何为 100 × 50 µm。通过模型筛选，尚未做实验验证。
80 × 40 µm main channel. A calculated example, not experimentally validated.|主流道为 80 × 40 µm，为计算示例，尚未做实验验证。
150 × 75 µm main channel. A calculated example, not experimentally validated.|主流道为 150 × 75 µm，为计算示例，尚未做实验验证。
Each continuous inlet: 3 µL/min, 100 µm wide. Reference point and exponent are illustrative, not measured; calibrate experimentally.|每侧连续相入口流量为 3 µL/min，宽度为 100 µm。参考点与指数为演示值，非实测数据，需实验标定。
Each continuous inlet: 2 µL/min, 80 µm wide. Reference point and exponent are illustrative, not measured; calibrate experimentally.|每侧连续相入口流量为 2 µL/min，宽度为 80 µm。参考点与指数为演示值，非实测数据，需实验标定。
Inspired by the 2026 paper geometry range: 500 × 100 µm, base length 8 mm, 2 pitches per row. This steady imposed-flow model is not the published capillary CFD or ANN.|参考 2026 年论文的几何范围：500 × 100 µm、基础长度 8 mm、每行折返数为 2。本工具是指定流量的稳态模型，并非论文中的毛细流 CFD 或神经网络。
Lower flow and longer mixing paths. A calculated example; experimental validation is required.|采用较低流量和较长混合路径，为计算示例，需实验验证。
2022 Table 1 velocities converted using its 400 µm inlet width and an assumed 100 µm depth. Concentrations and 2 × 8 mm chamber follow the paper. Independent plug-flow diffusion model.|按 2022 年论文表 1 的速度，以入口宽度 400 µm、假定深度 100 µm 换算流量；浓度和 2 × 8 mm 腔室尺寸参考论文。采用独立的柱塞流扩散模型。
Targets 1, 0.9, 0.65, 0.35, 0.1, 0 mM, inspired by the 2026 target vector. Independent inverse resistance design, not a reproduction of the published chip.|目标浓度为 1、0.9、0.65、0.35、0.1、0 mM，参考 2026 年论文的目标序列。采用独立的阻力反算设计，不是对论文芯片的复现。
Choose a valid chip geometry.|请选择有效的芯片结构。
Choose flow, target diameter or pressure input.|请选择流量、目标直径或压力输入模式。
Choose the phase flow to calculate.|请选择需要反算流量的相。
Continuous inlet pressure must exceed junction backpressure.|连续相入口压力必须大于交汇处背压。
Dispersed inlet pressure must exceed junction backpressure.|分散相入口压力必须大于交汇处背压。
The target diameter produces no finite positive flow ratio. Adjust the target or calibration.|目标直径无法得到有限的正流量比，请调整目标或标定参数。
Ca ≥ 0.1: outside the expanded application screening limit.|Ca ≥ 0.1，超出扩大后的应用筛选范围。
Inlet Re ≥ 10: outside the expanded application screening limit.|入口 Re ≥ 10，超出扩大后的应用筛选范围。
Depth exceeds main width: outside this planar T-junction model.|深度大于主流道宽度，偏离本平面 T 型模型。
Inlet width ratio is outside the T-junction range (1 ≤ wc/wd ≤ 4).|入口宽度比不在所采用的 T 型范围内（1 ≤ wc/wd ≤ 4）。
Expanded-range extrapolation: the app now permits Ca < 0.1 and inlet Re < 10. This does not extend the validated range of the squeezing law or an empirical flow-focusing calibration. Verify the breakup regime and size experimentally.|扩大范围的外推：应用允许 Ca < 0.1、入口 Re < 10，但这不代表挤压成滴公式或流动聚焦标定的有效范围已扩大。请通过实验确认成滴流态与尺寸。
Pressure-driven inlet estimate: Q = (Pin − Pj)/R. Pj defaults to 0 kPa gauge and must represent the actual junction backpressure. Rigid, fully developed single-phase inlet losses only; downstream two-phase resistance, junction losses, capillary entry/pressure jumps, tubing and PDMS deformation are excluded.|压力驱动入口估算：Q = (Pin − Pj)/R。Pj 默认为 0 kPa 表压，应按实际交汇处背压填写。仅考虑刚性入口支路的充分发展单相流损失，不含下游两相阻力、交汇损失、毛细进入压/压力跃变、外接管路及 PDMS 变形。
Inverse size design solves the same forward model for one unknown phase flow. Diameter means equivalent-volume sphere diameter, not T-junction axial length or confined transverse width. Matching a target algebraically is not experimental validation.|尺寸反算根据同一正向模型求解未知相流量。直径指等体积球直径，不是 T 型轴向长度或受限横向宽度。代数上匹配目标不代表已通过实验验证。
Reference-point power law. Default coefficients are illustrative, not measured. Geometry and fluid-property effects on size are not modeled. Inverse and pressure-derived estimates retain this limitation.|参考点幂律经验模型：默认系数为演示值，非实测值。未建模几何与流体物性对尺寸的影响；反算和压力换算同样受此限制。
Qc differs from its reference: size is an empirical extrapolation.|当前 Qc 不同于参考 Qc，尺寸属于经验模型外推。
Flow focusing: Qc is total flow in two equal-pressure symmetric continuous inlets. wc is their summed width and lc is one branch length. Each side carries Qc/2; its resistance is calculated using wc/2.|流动聚焦：Qc 为两条等压对称连续相支路的总流量，wc 为两侧宽度之和，lc 为单侧长度。每侧流量为 Qc/2，按 wc/2 计算阻力。
Original low-Ca screening passed. Confirm squeezing and preferential continuous-phase wall wetting experimentally.|通过原低 Ca 筛选；仍需实验确认挤压成滴及连续相优先润湿壁面。
Extreme flow ratio: verify stable breakup experimentally.|流量比较极端，请通过实验确认稳定成滴。
Choose a supported architecture.|请选择支持的芯片结构。
Outlet count must be an integer.|出口数量必须为整数。
Pitch counts must be integers.|折返数必须为整数。
Provide six nonnegative flows with a positive total.|请输入六个非负流量，且总流量必须大于零。
Provide six concentrations between 0 and 10000 mM.|请输入六个 0–10000 mM 范围内的浓度。
Reservoir concentrations must differ.|两个储液池的浓度必须不同。
Choose a supported target profile.|请选择支持的目标浓度分布。
Geometric endpoints must be positive.|等比分布的两个端点浓度均须大于零。
Insufficient supply pressure for the requested mixer flow. Increase pressure or channel size, or reduce flow.|供给压力不足以维持混合段所需流量，请提高压力、增大流道尺寸或降低流量。
Some branches reverse relative to the drawn rows; solute follows the solved pressure direction.|部分支路相对于图示行方向发生逆流；溶质按求得的压降方向输运。
Steady imposed-flow resistor network with perfectly mixed nodes. The diffusion score is a first-mode screening proxy; outlet means are not corrected for incomplete mixing.|采用稳态指定流量液阻网络，节点假定完全混合。扩散指标是一阶模态筛选近似，出口平均浓度未对混合不充分进行修正。
Capillary pressure and fill time describe one isolated channel with uniform wall wetting, not transient network filling or synchronized fronts.|毛细压力与充填时间仅描述壁面润湿均匀的单条流道，不代表网络瞬态充填或同步液面推进。
Diffusion screening is below 90%. Verify local mixing with CFD or dye experiments.|扩散筛选指标低于 90%，请通过 CFD 或染料实验验证局部混合。
Re ≥ 1: validate the fully developed low-inertia hydraulic approximation.|Re ≥ 1，请验证充分发展低惯性液阻近似的适用性。
Plug-flow advection with transverse diffusion, no-flux side walls, and no axial diffusion. A conservative implicit finite-volume solver allocates inlet bands by flow fraction.|采用柱塞流对流与横向扩散模型，侧壁无通量，忽略轴向扩散。守恒的隐式有限体积求解器按流量比例分配入口浓度带。
Sampling bins are mathematical regions in one chamber, not fabricated outlet branches. The detailed inlet manifold and inlet pressure losses are excluded.|采样区是同一腔室内的数学分区，不是实际加工的出口支路；未包含详细入口歧管和入口压降。
Re ≥ 1: validate inlet development and the uniform axial velocity assumption.|Re ≥ 1，请验证入口发展段及均匀轴向速度假设。
Axial Peclet number is below 10; neglecting axial diffusion may be inappropriate.|轴向佩克莱数低于 10，忽略轴向扩散可能不合适。
Inverse resistance sizing assumes two ideal equal-pressure buses and ambient outlets. Bus, bend and junction losses and fabrication tolerances are excluded; zero-fraction feeds are closed.|阻力反算假设两条理想等压总线、出口为环境压力；未计总线、弯道、交汇损失和制造公差，零比例进料支路关闭。
Target agreement assumes complete mixing. RMSE is an ideal algebraic forward check, not experimental accuracy. The diffusion score independently screens the mixer.|目标匹配假设完全混合。均方根误差是理想代数正向校验，不代表实验精度；扩散指标另行筛选混合段。
Diffusion screening is below 90%. Increase mixer length or reduce flow.|扩散筛选指标低于 90%，请增加混合段长度或降低流量。
Re ≥ 1: verify the low-inertia hydraulic approximation.|Re ≥ 1，请验证低惯性液阻近似。
ASSUMPTIONS|模型假设
UNITS|单位
ALL PARAMETERS (Qc/Qd are resolved outputs in inverse/pressure modes)|全部参数（反算/压力模式下 Qc、Qd 为计算结果）
REFERENCES|参考文献
Model note|模型说明
Screening or illustrative empirical estimate; calibrate|筛选或演示性经验估算，需标定
Architecture-specific indicators; see Models & references|指标含义因结构而异，详见“模型与参考文献”
No trained ANN weights are used. See Models & references for equations and scope.|未使用训练得到的神经网络权重；公式与适用范围详见“模型与参考文献”。
Rectangular-plug size estimate; geometry coefficient requires calibration.|矩形液塞尺寸估算，几何系数需标定。
Empirical reference-point estimate; illustrative coefficients require measured calibration.|参考点经验估算，演示系数需用实测数据标定。
Within the original conservative screen.|处于原保守筛选范围内。
Expanded-range model extrapolation.|扩大范围的模型外推。
Size estimate suppressed|不输出尺寸估算
Application screens|应用筛选条件
Continuous / dispersed flow|连续相 / 分散相流量
Main width|主流道宽度
Summed side width|两侧入口总宽
Target equivalent diameter|目标等体积球直径
model target residual|模型与目标的差值
single-phase inlet pressure drops|单相入口压降
Inlet gauge pressures Pc/Pd|入口表压 Pc/Pd
junction Pj|交汇处背压 Pj
Flows are inlet-resistance estimates, excluding capillary and downstream two-phase losses.|流量由入口阻力近似计算，不含毛细压力和下游两相流损失。
Flow-weighted mean|流量加权平均浓度
first-mode diffusion screening|一阶模态扩散筛选
diffusion mixing|扩散混合
Channels|流道
base|基础长度
pitches|折返数
adding|每个增加
Maximum inlet pressure|最大入口压力
Isolated-channel capillary pressure|单流道毛细压力
fill time|充填时间
not spontaneously wetting|不满足自发润湿条件
Network capillary transients are not simulated.|未模拟网络毛细充填瞬态。
Chamber|腔室
mean axial speed|平均轴向速度
transverse Pe|横向 Pe
chamber-only pressure drop|仅腔室内压降
Inlet velocities (mm/s)|入口流速（mm/s）
Independent plug-flow transport solver, not the paper's ANN or detailed inlet manifold.|独立的柱塞流输运求解器，并非论文的神经网络或详细入口歧管模型。
Supply pressure|供给压力
mixer length|混合段长度
Stock / diluent demand|原液 / 稀释液需求流量
Maximum required feed|所需最长进料支路
Longest required feed|所需最长进料支路
routing limit|布线长度上限
ideal forward-check RMSE|理想正向校验均方根误差
Ideal target forward-check RMSE|理想目标正向校验均方根误差
Output concentrations (mM)|出口浓度（mM）
Experimental validation is required.|需要实验验证。
transverse sampling bins|横向采样区
outlets|出口
total flow|总流量
depth|深度
width|宽度
dispersed inlet|分散相入口
residence|停留时间
volume|体积
frequency|频率
solved|已求解
continuous|连续相
dispersed|分散相
within|未超过
exceeds|超过
size screening failed|尺寸筛选未通过
mean|平均值
Compare|对比
`.trim().split('\n').map(line=>{const i=line.indexOf('|');return [line.slice(0,i),line.slice(i+1)];});
uiPairs.push(...[["DropLab provides analytical and numerical screening for early chip design. Presets are calculated examples, not proven fabrication recipes. Diagrams are original parameter-linked schematics, not fabrication masks.", "DropLab 使用解析与数值方法进行芯片初步设计筛选。预设方案是计算示例，未经制备与实验验证。图示为随参数联动的原创示意图，不是加工掩模。"], [", f = Qd/V. The equivalent sphere converts volume; it is not the confined drop width. Application screening limits are now Ca < 0.1 and both inlet Re < 10. Size is suppressed beyond those limits, at h > wc, or outside 1 ≤ wc/wd ≤ 4. Results above the original conservative Ca 0.01 / Re 1 screens are explicitly marked as extrapolation. Changing a screening limit does not validate the squeezing model at higher Ca or Re. α and the plug-volume approximation need calibration.", ", f = Qd/V。等体积球直径用于换算体积，不代表受限液滴宽度。应用筛选条件为 Ca < 0.1、两相入口 Re < 10。超过上述范围、h > wc 或 wc/wd 不在 1–4 内时不显示尺寸预测。超过原保守筛选 Ca 0.01 / Re 1 的结果标为外推。提高筛选上限不代表挤压模型在高 Ca 或 Re 下已获验证。α 与液塞体积近似仍需标定。"], [", V = πd³/6. Default coefficients are illustrative, not measured. Geometry and fluid-property effects on size are not predicted. Qc is the total of two symmetric continuous inlets; wc is their summed width and lc one branch length. A sphere is shown separately at the common physical scale; the downstream confined shape is not modeled.", ", V = πd³/6。默认系数仅为示例，并非实测值。模型不预测几何结构与流体物性对尺寸的影响。Qc 是两个对称连续相入口的总流量；wc 是两侧宽度之和，lc 是单侧长度。等体积球以统一物理比例尺单独显示；不模拟下游液滴的受限形状。"], [" enter equivalent-volume sphere diameter and one phase flow, then calculate the other. T-junction ratio q = [π d_eq³/(6 wc² h) − 1]/α; positive flow requires d_eq > (6 wc² h/π)", " 输入等体积球直径与一相流量，反算另一相流量。T 型结构流量比 q = [π d_eq³/(6 wc² h) − 1]/α；分散相流量为正要求 d_eq > (6 wc² h/π)"], [". With Qc known, Qd = q Qc; with Qd known, Qc = Qd/q. The same screening, calibration and extrapolation rules apply to the solved operating point. A target match is algebraic, not an experimental accuracy claim.", "。已知 Qc 时，Qd = q Qc；已知 Qd 时，Qc = Qd/q。求得的工作点仍须满足相同筛选、标定与外推规则。命中目标仅表示代数关系成立，不代表实验精度。"], [" enter continuous and dispersed inlet gauge pressures Pc and Pd. Optional junction backpressure Pj defaults to 0 kPa gauge; both inlets must exceed it. Qd = (Pd − Pj)/Rd. For T-junctions, Qc = (Pc − Pj)/Rc. For symmetric flow focusing, each continuous side has Rside and Qc = 2(Pc − Pj)/Rside. Rc, Rd and Rside use the rigid rectangular-duct odd Fourier series. Pressure is converted from kPa to Pa internally; volume flow is converted to µL/min.", " 输入连续相与分散相入口表压 Pc、Pd。可选交汇处背压 Pj 默认为 0 kPa 表压；两相入口压力均须高于 Pj。Qd = (Pd − Pj)/Rd。T 型结构 Qc = (Pc − Pj)/Rc；对称流动聚焦每侧阻力为 Rside，Qc = 2(Pc − Pj)/Rside。Rc、Rd 与 Rside 使用刚性矩形流道的奇数阶傅里叶级数。内部将 kPa 换算为 Pa，并将体积流量换算为 µL/min。"], ["This is a fully developed, single-phase inlet resistance estimate, not a solved two-phase downstream pressure network. Junction losses, capillary pressure jumps/entry, external tubing, downstream droplet resistance and wall deformation are excluded. If downstream geometry or measured Pj is unknown, inlet gauge pressures alone do not uniquely specify the actual chip flow; Pj = 0 is an explicit simplifying assumption.", "这里使用充分发展单相入口流动的阻力估算，未求解下游两相压力网络。不计交汇处局部损失、毛细压力跃变与入口压力、外接管路、下游液滴阻力及壁面变形。若下游结构或实测 Pj 未知，仅凭入口表压不能唯一确定实际流量；Pj = 0 是明确的简化假设。"], [" Kirchhoff flow balance solves a split-and-merge lattice of rectangular resistors. Segment length = base + pitch count × added length. P1/P2/P3 repeat down the rows; two imposed inlet flows drain to ambient outlets. Solute follows solved pressure directions through perfectly mixed nodes. Residence = active network volume / total flow. The first-mode diffusion score M = 1 − exp(−π²Dt/w²) is a screening proxy, not a measured mixing index or a local mixing guarantee. It does not modify outlet means.", " 使用基尔霍夫流量守恒求解由矩形流阻组成的分流与合流网络。支路长度 = 基础长度 + 折返数 × 附加长度。P1/P2/P3 沿各行重复；两路给定入口流量由常压出口流出。溶质沿求得的流向通过完全混合节点。停留时间 = 有效网络体积 / 总流量。一阶扩散评分 M = 1 − exp(−π²Dt/w²) 仅用于筛选，既不是实测混合指数，也不保证局部充分混合，不修正出口平均浓度。"], [" U ∂C/∂x = D ∂²C/∂y², U = Q/(Wh), no-flux side walls, flow-weighted inlet bands, no axial diffusion. A conservative implicit finite-volume solver uses 120 transverse cells × 80 axial steps and exact initial cell-average overlap. Mixing score = 1 − σout/σin. Sampling bins are mathematical regions in one chamber, not physical outlet branches. Six parallel inlet bands independently simplify the paper's detailed inlet manifold. Inlet pressure losses are excluded; inlet velocities use the entered inlet width and depth.", " U ∂C/∂x = D ∂²C/∂y²，U = Q/(Wh)。侧壁无通量，入口条带宽度按流量加权，不计轴向扩散。守恒隐式有限体积求解采用 120 个横向单元 × 80 个轴向步，初始浓度使用精确的单元平均重叠积分。混合评分 = 1 − σout/σin。采样区是同一腔室内的数学区域，不是实际分支出口。六条平行入口带简化了论文中的详细歧管，不计入口压损；入口流速按输入宽度和深度计算。"], [" stock fraction f = (Ctarget − CB)/(CA − CB), q = Qtotal/N. Two ideal equal-pressure supply buses feed each mixer. Rfeed = (ΔP − Rmix q)/(fraction × q); feed length follows rectangular resistance per length. Pure endpoints close one feed. Target agreement assumes complete mixing, identical fluids, ambient outlets, and negligible supply-bus, bend and junction losses. RMSE is a forward algebraic check, not experimental accuracy.", " 原液比例 f = (Ctarget − CB)/(CA − CB)，q = Qtotal/N。两条理想等压供给总线为各混合段供液。Rfeed = (ΔP − Rmix q)/(fraction × q)；进料长度由矩形流道单位长度阻力求得。纯组分端点关闭一路进料。目标浓度成立依赖完全混合、两路流体物性相同、出口常压及总线、弯道和交汇处损失可忽略等假设。RMSE 是正向代数校验，不代表实验精度。"], [" Pc = 2γ cosθ (1/w + 1/h) with identical contact angle on all four walls. Isolated-channel fill time = r′ wh L²/(2Pc), only for positive Pc. The diagnostic excludes network transients, finite reservoirs, contact-angle hysteresis and synchronized fronts; the tree is still driven by imposed flow.", " Pc = 2γ cosθ (1/w + 1/h)，假设四壁接触角一致。单流道充填时间 = r′ wh L²/(2Pc)，仅在 Pc 为正时计算。不计网络瞬态、有限储液量、接触角滞后与同步前沿；树形网络仍由给定流量驱动。"], ["Machine Learning-Driven Capillary Microfluidic Design Automation for Programmable Gradient Generation and Antimicrobial Testing.", "机器学习驱动的毛细微流控设计自动化：用于可编程梯度产生及抗菌测试。"], [" Informs the tree concept, width/length/pitch controls, capillary screening and six-level target example. Its transient multiphase CFD, synchronized filling, neural network and experiments are not reproduced.", " 参考其树形结构、宽度/长度/折返参数、毛细筛选与六级目标浓度示例。未复现其瞬态多相 CFD、同步充填、神经网络与实验。"], ["Machine-Learning-Enabled Design and Manipulation of a Microfluidic Concentration Gradient Generator.", "机器学习赋能的微流控浓度梯度产生器设计与调控。"], [" Informs six adjustable inlet flows/concentrations, the 2 × 8 mm chamber and D = 425 µm²/s. The preset converts Table 1 velocities using its 400 µm inlet width and an explicitly assumed 100 µm depth. This app uses an independent transport solver, not the paper's ANN.", " 参考其六路可调入口流量/浓度、2 × 8 mm 腔室及 D = 425 µm²/s。预设利用论文表 1 流速、400 µm 入口宽度及明确假设的 100 µm 深度换算流量。本应用使用独立输运求解器，未使用论文神经网络。"], [" Hydraulic resistance / pressure-flow circuit abstraction and its limits.", " 液压阻力与压力–流量电路类比及其适用限制。"], ["No trained weights accompanied the PDFs. No paper-reported neural-network accuracy or experimental performance is claimed for this app. Confirm predictions for the intended fluids, wetting, fabrication and operating conditions.", "上传的 PDF 未附训练权重。本应用不声称具备论文报道的神经网络精度或实验性能。请针对实际流体、润湿、加工与操作条件验证预测。"], ["The downloadable HTML contains all code, styles and calculations, without a CDN, account or calculation service. Only reference links require internet when clicked. Records are browser-specific; some browsers restrict local-file storage. Export JSON backups to move or preserve records. Existing v1 droplet backups are accepted. Import merges candidates by ID and restores valid current inputs; export first if you need a separate snapshot.", "下载的 HTML 包含全部代码、样式和计算，无需 CDN、账号或计算服务。仅点击参考文献链接时需要联网。记录保存在各自浏览器中；部分浏览器会限制本地文件存储。请导出 JSON 备份来迁移或保留记录。兼容旧版 v1 液滴备份。导入按 ID 合并候选并恢复有效的当前参数；如需单独快照，请先导出。"], ["Inverse diameter design:", "直径反算："], ["The supplied papers", "上传的参考论文"], ["Single file & records", "单文件与记录"], ["Capillary diagnostics:", "毛细诊断："], ["Resistive mixing tree:", "阻力混合树："], ["Six-inlet co-flow:", "六入口并流："], ["Programmable dilution bank:", "可编程稀释阵列："], ["T-junction low-capillary-number squeezing scaling.", "T 型交汇低毛细数挤压成滴标度关系。"], ["equivalent sphere diameter", "等体积球直径"], ["dimensionless", "无量纲"], ["versus", "相对于"], ["and inlet Re", "且入口 Re"], ["inlet Re c/d", "入口 Re（连续相/分散相）"], ["Flow-focusing ratio", "流动聚焦流量比"], ["design", "设计"], ["outputs", "输出"], ["score", "评分"], ["ASSUMPTIONS", "模型假设"], ["UNITS", "单位"], ["DropLab · Microfluidic Design Studio", "DropLab · 微流控设计工作台"]]);
uiPairs.push(['TRANSPARENT BY DESIGN','模型透明可查'],['Channel','流道'],['gradient generator','浓度梯度产生器'],['parameter-linked dimensions and concentrations','随参数联动的尺寸与浓度'],['tree','树形'],['coflow','共流'],['bank','稀释阵列']);
const uiDictionary=new Map(uiPairs);
for(const [en,zh] of uiPairs)if(en.length<65&&/[a-z]/.test(en))uiDictionary.set(en.toUpperCase(),zh);
const escapePhrase=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const uiPhrasePattern=new RegExp([...uiDictionary.keys()].sort((a,b)=>b.length-a.length).map(s=>(/^[A-Za-z0-9]/.test(s)?'(?<![A-Za-z0-9_])':'')+escapePhrase(s)+(/[A-Za-z0-9]$/.test(s)?'(?![A-Za-z0-9_])':'')).join('|'),'gi');
const uiLowerDictionary=new Map([...uiDictionary].map(([en,zh])=>[en.toLowerCase(),zh]));
const uiTranslationCache=new Map();
export function getLanguage(){return uiLanguage;}
export function translateText(value,language=uiLanguage){const text=String(value);if(language!=='zh'||!/[A-Za-z]/.test(text))return text;if(uiTranslationCache.has(text))return uiTranslationCache.get(text);let output=text;
output=output.replace(/Enter exactly (\d+) values within the reservoir concentration range\./g,'请输入恰好 $1 个、位于储液池浓度范围内的数值。').replace(/Enter ([\d.eE+-]+)–([\d.eE+-]+)\./g,'请输入 $1–$2 范围内的数值。').replace(/ must be between ([\d.eE+-]+) and ([\d.eE+-]+)\./g,'应在 $1–$2 之间。').replace(/This T-junction requires d_eq > ([\d.]+) µm for positive dispersed flow\./g,'要使分散相流量为正，此 T 型结构要求 d_eq > $1 µm。').replace(/Calculated (Qc|Qd) is outside ([\d.eE+-]+)–([\d.eE+-]+) µL\/min\. Adjust the operating inputs, geometry or fluid properties\./g,'计算得到的 $1 超出 $2–$3 µL/min，请调整操作参数、几何结构或流体物性。').replace(/Required feed length exceeds the ([\d.]+) mm routing limit\. Adjust pressure, flow or geometry\./g,'所需进料长度超过 $1 mm 布线限制，请调整压力、流量或几何结构。').replace(/(\d+) example designs restored\./g,'已恢复 $1 个预设方案。').replace(/(\d+) candidates merged; current inputs restored\./g,'已合并 $1 个候选方案，并恢复当前输入。').replace(/Inlet (\d+) concentration/g,'入口 $1 浓度').replace(/Inlet (\d+) flow/g,'入口 $1 流量').replace(/\bInlet (\d+)\b/g,'入口 $1');
output=output.replace(uiPhrasePattern,match=>uiDictionary.get(match)||uiLowerDictionary.get(match.toLowerCase()));if(uiTranslationCache.size>2500)uiTranslationCache.clear();uiTranslationCache.set(text,output);return output;}
const uiOriginalText=new WeakMap(),uiLastText=new WeakMap(),uiOriginalAttributes=new WeakMap(),uiLastAttributes=new WeakMap();
let uiObserver=null,uiQueued=false;
function excludedUiNode(element){return !!element?.closest('script,style,textarea,[data-user-content],[data-no-i18n]');}
function applyUiLanguage(){if(typeof document==='undefined')return;uiObserver?.disconnect();document.documentElement.lang=uiLanguage==='zh'?'zh-CN':'en';document.title=uiLanguage==='zh'?'DropLab · 微流控设计工作台':'DropLab · Microfluidic Design Studio';
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while((node=walker.nextNode())){if(excludedUiNode(node.parentElement))continue;const current=node.data;if(!uiOriginalText.has(node)||current!==uiLastText.get(node))uiOriginalText.set(node,current);const next=translateText(uiOriginalText.get(node));if(current!==next)node.data=next;uiLastText.set(node,next);}
for(const element of document.querySelectorAll('[aria-label],[title],[placeholder]')){if(excludedUiNode(element))continue;const original=uiOriginalAttributes.get(element)||{},last=uiLastAttributes.get(element)||{};for(const name of ['aria-label','title','placeholder']){if(!element.hasAttribute(name))continue;const current=element.getAttribute(name);if(!(name in original)||current!==last[name])original[name]=current;const next=translateText(original[name]);if(next!==current)element.setAttribute(name,next);last[name]=next;}uiOriginalAttributes.set(element,original);uiLastAttributes.set(element,last);}
const button=document.getElementById('toggle-language');if(button){button.setAttribute('aria-pressed',String(uiLanguage==='zh'));button.setAttribute('aria-label',uiLanguage==='zh'?'Switch to English':'切换到中文');button.querySelector('[data-language-current]').textContent=uiLanguage==='zh'?'中':'EN';}
uiObserver?.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder']});}
export function setLanguage(language){uiLanguage=language==='zh'?'zh':'en';try{localStorage.setItem(UI_LANGUAGE_KEY,uiLanguage);}catch{}applyUiLanguage();}
export function initLanguage(){try{uiLanguage=localStorage.getItem(UI_LANGUAGE_KEY)==='zh'?'zh':'en';}catch{}uiObserver=new MutationObserver(()=>{if(uiQueued)return;uiQueued=true;queueMicrotask(()=>{uiQueued=false;applyUiLanguage();});});document.getElementById('toggle-language')?.addEventListener('click',()=>setLanguage(uiLanguage==='zh'?'en':'zh'));applyUiLanguage();}
