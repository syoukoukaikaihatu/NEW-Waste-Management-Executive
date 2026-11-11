const KEY='cbl_v42_state', OLD_KEYS=['cbl_v41_state','cbl_v40_state','wme_v31_state','wme_v3_state'];
const waste=[
['W01','処理会社の事業構造','廃棄物が発生してから最終処分までの全体像を経営者として説明できる'],['W02','一廃・産廃・特別管理産廃','区分・処理責任・許可の違いを整理する'],['W03','許可証を読む','業・施設許可、品目、区域、条件を確認できる'],['W04','排出事業者責任と処理業者責任','委託側・受託側の責任を区別する'],['W05','委託契約書を読む','契約の重要確認事項を理解する'],['W06','マニフェストの全体像','排出から最終処分終了までの情報の流れを説明する'],['W07','JWNET実務','電子マニフェストの社内運用を理解する'],['W08','契約・マニフェストの事故','誤登録等の是正と再発防止を考える'],['W09','収集運搬と原価','車両・人員・ルート等から回収原価を考える'],['W10','感染性廃棄物の実務','分類・容器・保管・運搬・処理を理解する'],['W11','焼却処理の仕組み','投入から燃焼・熱回収・排ガス・灰まで理解する'],['W12','焼却以外の処理と最終処分','破砕等の処理と残さの行先を理解する'],['W13','焼却炉を構成する設備','主要設備の役割と停止影響を理解する'],['W14','ボイラー・蒸気・熱回収','熱回収・資格・停止リスクを整理する'],['W15','電気・受変電設備','電気設備・保安管理・停電影響を学ぶ'],['W16','排ガス・排水・公害防止','環境基準・測定・異常時対応を整理する'],['W17','工場の重要資格・選任者','法定選任と属人化リスクを見える化する'],['W18','定修・予防保全・停止リスク','定修・予備品・復旧・バックアップを整理する'],['W19','市町村の一般廃棄物処理と行政ごみ','市町村の処理責任・一般廃棄物処理計画・家庭ごみの民間施設受入れ条件を理解する'],['W20','行政の家庭ごみ：定修・故障時の臨時受入れ','自治体焼却施設の定修・故障・緊急停止時における家庭ごみの受入れ手続・契約・搬入条件・許可と処理能力を検討する'],['W21','災害廃棄物・広域処理','災害時の民間事業者の役割を理解する'],['W22','処理原価を理解する','人件費・燃料・薬剤・電力・修繕等を分解する'],['W23','空港ごみ・行政ごみの料金と採算','空港由来の一般廃棄物と自治体の家庭ごみの臨時受入れを比較し、単価・追加原価・稼働率・設備負荷・限界利益を評価する'],['W24','経営者として工場を管理する','法令・設備・人材・顧客・行政・BCPを統合する']];
const agri=[
['A01','日本農業の全体像','市場規模・経営体・主要作物・構造変化を説明できる'],['A02','農業のサプライチェーン','生産から流通・加工・販売までの商流を理解する'],['A03','農業経営体・農業法人','法人化・大型化・農地集約の動きを理解する'],['A04','千葉県・成田周辺の農業','地域の主要品目・プレイヤー・特徴を把握する'],['A05','米のビジネス','生産・価格・流通・収益構造を理解する'],['A06','露地野菜のビジネス','作型・収量・労働・販売の特徴を理解する'],['A07','施設園芸のビジネス','ハウス・環境制御・暖房費・収益構造を理解する'],['A08','果樹・高付加価値農業','長期投資とブランド・直販を理解する'],['A09','農業のPLと原価','反収・単価・歩留まり・労務費等で採算を見る'],['A10','農産物流通と販売','JA・市場・契約栽培・直販・ECを比較する'],['A11','農地・農地法・参入制度','農地利用と企業参入の基本制度を理解する'],['A12','農業政策・補助制度','政策方向と支援制度を事業判断に使う'],['A13','人材・雇用・農作業受託','人手不足と外部サービスの構造を理解する'],['A14','スマート農業','自動化・AI・ドローン・環境制御の投資効果を考える'],['A15','農業法人のケース分析','実在企業を市場・収益・競争優位で分析する'],['A16','自社が農業参入するなら','参入目的・方式・販売先・投資・リスクを整理する']];
const circular=[
['C01','余熱利用の基本','焼却施設から利用可能な熱の形・量・時間帯を整理する'],['C02','施設園芸の熱需要','作物・季節・ハウス規模別の熱需要を理解する'],['C03','作物候補の選定','市場性・栽培条件・熱需要から候補作物を比較する'],['C04','立地・導管・インフラ','工場と農業施設の距離・熱輸送・電力・水等を整理する'],['C05','事業スキーム','自社営農・農業法人連携・熱販売等の方式を比較する'],['C06','法制度・許認可・補助制度','農地・建築・環境・補助制度等の確認事項を整理する'],['C07','投資採算・FS','CAPEX・OPEX・売上・熱価値・回収期間を検証する'],['C08','実証から意思決定','小規模実証・KPI・撤退基準・本投資条件を決める']];
const management=[
['M01','工場経営の全体像','安全・法令・操業・品質・収益・人材を一体で管理する視点を身につける'],
['M02','工場の損益構造とPL','売上・固定費・変動費・営業利益を工場単位で理解する'],
['M03','処理量・単価・限界利益','医療系・空港ごみ・行政ごみの案件別採算を考える'],
['M04','設備稼働率と収益性','稼働率・受入余力・処理能力・操業停止を経営判断につなげる'],
['M05','修繕費と予防保全投資','事後保全・予防保全・更新投資の優先順位を決める'],
['M06','設備投資と投資回収','NPV・回収期間・資金繰り・停止リスクを初歩から学ぶ'],
['M07','予算・実績・月次管理','工場のKPI・予実差異・改善会議の進め方を学ぶ'],
['M08','工場の人員配置と育成','シフト・技能伝承・資格者育成・属人化対策を考える'],
['M09','安全・品質・コンプライアンス','事故・苦情・行政対応を予防する仕組みを考える'],
['M10','顧客別採算と価格戦略','医療機関・空港・自治体ごとの契約と価格を分析する'],
['M11','3C・PESTで廃棄物市場を分析','廃棄物処理市場の顧客・競合・自社・外部環境を分析する'],
['M12','5Forcesと競争優位','参入障壁・代替手段・交渉力から自社の強みを考える'],
['M13','バリューチェーンと業務改善','収集運搬から中間処理までの付加価値とムダを見つける'],
['M14','工場の組織と権限移譲','グループ長・補佐・現場管理者の役割分担と会議体を考える'],
['M15','新工場・BCP・事業継続','新旧施設・緊急時受入れ・バックアップ体制を検討する'],
['M16','成長・多角化・撤退判断','既存事業の成長策と新規事業の採算・撤退基準を考える'],
['M17','経営課題を整理して優先順位を決める','事実・仮説・リスク・投資対効果を整理して意思決定する'],
['M18','工場グループ長としての90日計画','現場把握・数値把握・人材・設備・優先課題の実行計画をつくる']];
const executive=[["E01", "経営戦略の基本", "【経営戦略】の「経営戦略の基本」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E02", "PEST分析", "【経営戦略】の「PEST分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E03", "Five Forces", "【経営戦略】の「Five Forces」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E04", "3C分析", "【経営戦略】の「3C分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E05", "バリューチェーン", "【経営戦略】の「バリューチェーン」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E06", "SWOT・クロスSWOT", "【経営戦略】の「SWOT・クロスSWOT」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E07", "競争優位と差別化", "【経営戦略】の「競争優位と差別化」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E08", "ビジネスモデル", "【経営戦略】の「ビジネスモデル」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E09", "事業ポートフォリオ", "【経営戦略】の「事業ポートフォリオ」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E10", "中期経営戦略", "【経営戦略】の「中期経営戦略」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E11", "財務三表の読み方", "【財務・会計】の「財務三表の読み方」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E12", "貸借対照表の分析", "【財務・会計】の「貸借対照表の分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E13", "損益計算書の分析", "【財務・会計】の「損益計算書の分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E14", "キャッシュフロー分析", "【財務・会計】の「キャッシュフロー分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E15", "財務指標・ROIC", "【財務・会計】の「財務指標・ROIC」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E16", "運転資金と資金繰り", "【財務・会計】の「運転資金と資金繰り」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E17", "固定費と変動費", "【収益・原価管理】の「固定費と変動費」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E18", "損益分岐点分析", "【収益・原価管理】の「損益分岐点分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E19", "顧客別採算", "【収益・原価管理】の「顧客別採算」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E20", "収集ルート別採算", "【収益・原価管理】の「収集ルート別採算」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E21", "原価計算と管理会計", "【収益・原価管理】の「原価計算と管理会計」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E22", "価格設定・値上げ交渉", "【収益・原価管理】の「価格設定・値上げ交渉」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E23", "組織設計と権限委譲", "【組織・人材】の「組織設計と権限委譲」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E24", "採用・定着と人材配置", "【組織・人材】の「採用・定着と人材配置」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E25", "人事評価と報酬", "【組織・人材】の「人事評価と報酬」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E26", "管理職育成", "【組織・人材】の「管理職育成」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E27", "リーダーシップと企業文化", "【組織・人材】の「リーダーシップと企業文化」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E28", "市場細分化と顧客選別", "【マーケティング・営業】の「市場細分化と顧客選別」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E29", "顧客価値と提案営業", "【マーケティング・営業】の「顧客価値と提案営業」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E30", "競合分析", "【マーケティング・営業】の「競合分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E31", "顧客維持と契約更新", "【マーケティング・営業】の「顧客維持と契約更新」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E32", "設備投資の採算", "【投資・資金調達】の「設備投資の採算」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E33", "NPV・IRR", "【投資・資金調達】の「NPV・IRR」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E34", "投資回収期間と感度分析", "【投資・資金調達】の「投資回収期間と感度分析」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E35", "借入・金利・返済計画", "【投資・資金調達】の「借入・金利・返済計画」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E36", "設備更新と保全投資", "【投資・資金調達】の「設備更新と保全投資」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E37", "新規事業の市場検証", "【新規事業・成長】の「新規事業の市場検証」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E38", "新規事業の収支モデル", "【新規事業・成長】の「新規事業の収支モデル」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E39", "多角化とシナジー", "【新規事業・成長】の「多角化とシナジー」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E40", "M&Aの基本", "【新規事業・成長】の「M&Aの基本」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E41", "事業撤退判断", "【新規事業・成長】の「事業撤退判断」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E42", "コンプライアンスと内部統制", "【リスク・ガバナンス】の「コンプライアンスと内部統制」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E43", "BCPと災害対応", "【リスク・ガバナンス】の「BCPと災害対応」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E44", "労働安全と事故リスク", "【リスク・ガバナンス】の「労働安全と事故リスク」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E45", "経営会議と意思決定", "【リスク・ガバナンス】の「経営会議と意思決定」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E46", "KPI設計", "【経営計画・実行】の「KPI設計」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E47", "予算策定と予実管理", "【経営計画・実行】の「予算策定と予実管理」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E48", "経営課題の優先順位", "【経営計画・実行】の「経営課題の優先順位」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E49", "3か年経営計画", "【経営計画・実行】の「3か年経営計画」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E50", "意思決定と不確実性", "【経営者としての判断】の「意思決定と不確実性」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E51", "ステークホルダー交渉", "【経営者としての判断】の「ステークホルダー交渉」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"], ["E52", "事業承継と経営者の役割", "【経営者としての判断】の「事業承継と経営者の役割」を廃棄物処理工場の運営・収益・人材・投資・行政対応に結びつけて学ぶ"]];
const execGroups={"経営戦略": ["経営戦略の基本", "PEST分析", "Five Forces", "3C分析", "バリューチェーン", "SWOT・クロスSWOT", "競争優位と差別化", "ビジネスモデル", "事業ポートフォリオ", "中期経営戦略"], "財務・会計": ["財務三表の読み方", "貸借対照表の分析", "損益計算書の分析", "キャッシュフロー分析", "財務指標・ROIC", "運転資金と資金繰り"], "収益・原価管理": ["固定費と変動費", "損益分岐点分析", "顧客別採算", "収集ルート別採算", "原価計算と管理会計", "価格設定・値上げ交渉"], "組織・人材": ["組織設計と権限委譲", "採用・定着と人材配置", "人事評価と報酬", "管理職育成", "リーダーシップと企業文化"], "マーケティング・営業": ["市場細分化と顧客選別", "顧客価値と提案営業", "競合分析", "顧客維持と契約更新"], "投資・資金調達": ["設備投資の採算", "NPV・IRR", "投資回収期間と感度分析", "借入・金利・返済計画", "設備更新と保全投資"], "新規事業・成長": ["新規事業の市場検証", "新規事業の収支モデル", "多角化とシナジー", "M&Aの基本", "事業撤退判断"], "リスク・ガバナンス": ["コンプライアンスと内部統制", "BCPと災害対応", "労働安全と事故リスク", "経営会議と意思決定"], "経営計画・実行": ["KPI設計", "予算策定と予実管理", "経営課題の優先順位", "3か年経営計画"], "経営者としての判断": ["意思決定と不確実性", "ステークホルダー交渉", "事業承継と経営者の役割"]};
const courses={management:{name:'工場経営・経営者育成（実践18テーマ）',items:management},executive:{name:'経営者育成・体系学習（旧サイトの全テーマ）',items:executive},waste:{name:'廃棄物',items:waste},agri:{name:'農業',items:agri},circular:{name:'余熱 × 農業',items:circular}};
function fresh(){return{completed:[],notes:{},company:{},executiveOriginalRecords:[],current:'W01',lastUpdated:''}}
function load(){let raw=localStorage.getItem(KEY);if(raw){try{return{...fresh(),...JSON.parse(raw)}}catch(e){}} for(const k of OLD_KEYS){raw=localStorage.getItem(k);if(!raw)continue;try{const o=JSON.parse(raw),s=fresh();(o.completed||[]).forEach(n=>s.completed.push(/^\d+$/.test(n)?'W'+n:n));for(const [n,v] of Object.entries(o.lessonNotes||{}))s.notes[/^\d+$/.test(n)?'W'+n:n]={learned:v.understanding||v.fact||'',fact:v.ourCompany||'',next:v.mission||v.question||'',source:v.source||''};return s}catch(e){}}return fresh()}
let state=load(),page='home';
function save(){state.lastUpdated=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(state));const e=document.getElementById('saveState');if(e){e.textContent='保存しました';setTimeout(()=>e.textContent='自動保存',800)}}
const nav=[['home','HOME'],['waste','工場実務｜24テーマ'],['management','工場経営｜実践18テーマ'],['executive','経営者育成｜体系学習'],['company','会社の現在地'],['records','学習記録']];
function renderNav(){navEl=document.getElementById('nav');navEl.innerHTML=nav.map(x=>`<button class="nav-btn ${page===x[0]?'active':''}" data-p="${x[0]}">${x[1]}</button>`).join('');navEl.querySelectorAll('button').forEach(b=>b.onclick=()=>go(b.dataset.p))}
function go(p,arg){page=p;renderNav();document.getElementById('sidebar').classList.remove('open');render(p,arg)}
function item(id){for(const c of Object.values(courses)){const x=c.items.find(v=>v[0]===id);if(x)return{course:c.name,row:x}}}
function courseOf(id){return id[0]==='W'?'waste':id[0]==='M'?'management':id[0]==='E'?'executive':id[0]==='A'?'agri':'circular'}
function pct(k){const c=courses[k];return Math.round(c.items.filter(x=>state.completed.includes(x[0])).length/c.items.length*100)}
function next(k){return courses[k].items.find(x=>!state.completed.includes(x[0]))||courses[k].items.at(-1)}
function wasteFocus(id){
 if(id==='W19')return '【重点論点】市町村の一般廃棄物処理責任、一般廃棄物処理計画、家庭ごみと空港由来ごみの発生源・区分・契約主体の違い。民間施設への搬入が可能となる法的根拠、必要な許可・届出・自治体の手続を、施設所在地や契約条件によって異なるものとして確認する。';
 if(id==='W20')return '【重点論点】自治体焼却施設の定期修繕・故障・緊急停止時に家庭ごみを臨時受入れする場合の①受入可能な廃棄物と処理施設の許可条件②自治体との契約・搬入協議③収集運搬・搬入管理④性状・分別・発熱量・異物⑤受入量・稼働率・定修日程との競合⑥料金・追加原価・利益⑦住民・行政への説明。自社で実施済みとは推定しない。';
 if(id==='W23')return '【重点論点】空港由来の一般廃棄物を基礎的な処理量、行政の家庭ごみを臨時受入れ候補とした場合の、顧客別・案件別採算比較。処理単価だけでなく運搬条件、追加燃料・薬剤・人件費、設備負荷、余力、受入れ制限、固定費、限界利益、既存契約への影響を検討する。仮定の数値は例示と明記する。';
 if(id==='W18'||id==='W24')return '【関連論点】自社工場の定修・停止リスクと、自治体焼却施設の定修時に発生する家庭ごみの臨時受入れ需要を混同せず、処理能力・操業・収益の両面から考える。';
 return '';
}
function promptFor(id){const it=item(id),title=it.row[1],goal=it.row[2],domain=it.course;return `私は廃棄物処理工場のグループ長として「${domain}」を体系的に学んでいます。\n週2回（工場実務と工場経営を各1回）を目安に、1回最大30分、ChatGPTとの対話で学習します。忙しい日は15分でも完了として構いません。\n\n【今日のテーマ】\n${id}｜${title}\n\n【今日のゴール】\n${goal}\n${wasteFocus(id)?'\n'+wasteFocus(id)+'\n':''}\n【学習方針】\n・初心者にも分かる言葉で説明してください。\n・単なる知識ではなく、工場グループ長として現場運営・収益・人材・投資の判断に使える理解を目指します。\n・医療系廃棄物、成田空港の一般廃棄物、自治体家庭ごみの定修時等の臨時受入れを、関連するテーマでは区別して扱ってください。\n・経営フレームワークは廃棄物処理工場の具体例に当てはめてください。\n・経営者育成の体系学習では、元の理論の基本を省略せず学び、その後に工場の具体例で応用してください。\n・最新情報が重要な内容はWeb検索し、官公庁・自治体・公的統計・一次情報を優先してください。\n・法令上の一般論、一次資料で確認した情報、自社について利用者が確認した事実、仮説を明確に区別してください。\n・自社の許可範囲、契約内容、数量、単価、収益性は提示されない限り断定しないでください。\n・工場の現場視点、経営視点、顧客・行政視点を含めてください。\n・一方的に長く説明せず、私への質問を挟みながら一問ずつ対話形式で進めてください。\n\n【最大30分の進め方】\nSTEP1｜基礎を理解する（約8分）\n今日のテーマの全体像、重要用語、仕組みを説明してください。\n\nSTEP2｜市場・制度・実務を調べる（約7分）\n今日のテーマに必要な最新データ、制度、業界動向、実務上のポイントを確認してください。\n\nSTEP3｜経営者として考える（約7分）\n収益、コスト、投資、人材、リスク、競争力、法令・制度の観点から重要な問いを出してください。\n\nSTEP4｜自社・事業に当てはめる（約5分）\n私に一問ずつ質問し、自社への当てはめを手伝ってください。${domain==='余熱 × 農業'?' 廃棄物焼却施設の余熱を農業に利用する事業性を意識してください。':''}\n\nSTEP5｜サイト反映用データを作る（約3分）\n最後に、下記の形式をそのまま使って出力してください。各項目は簡潔に。確認できた事実と推測・課題候補を混ぜないでください。\n\n[SITE_DATA]\nTHEME: ${id}｜${title}\nLEARNED: 今日わかった一般知識・業界知識\nOUR_FACT: 自社について確認できた事実。なければ「なし」\nISSUE: 自社の課題候補。断定できなければ「要確認」と明記。なければ「なし」\nUNKNOWN: まだ分からないこと・次に確認すること。なければ「なし」\nSOURCE: 根拠URL・資料名・確認日。なければ「なし」\n[/SITE_DATA]\n\nこのブロックはサイトへそのままコピペするため、見出し名を変更しないでください。\n時間が15分しかない場合はSTEP1〜4を短縮し、必ずSTEP5まで完了してください。\nではSTEP1から始めてください。`}

function sharePromptFor(id){
 const it=item(id),n=state.notes[id]||{};
 if(!it)return '';
 return `以下は、私がChatGPTで学習した「${id}｜${it.row[1]}」の記録です。
この内容を、社内の他の人へ短時間で共有できる資料にしてください。

【用途】
・社内共有用
・A4 1枚を基本とする
・読む時間は3分程度
・専門知識がない人にも分かる言葉にする
・学習内容を全部載せず、重要事項だけに絞る
・事実と推測・課題候補を混同しない
・自社情報は下記の記録にある内容だけを使い、勝手に補完しない
・根拠が不足している点は「要確認」とする

【資料構成】
1. テーマ・今回の結論
2. 押さえておきたいポイント（3〜5点）
3. 自社との関係
4. 自社で確認できていること
5. 課題・検討事項
6. 次に確認すること
7. 主な根拠・出典

【学習記録】
■ 今日わかったこと｜KNOWLEDGE
${n.learned||'なし'}

■ 自社で確認できた事実｜OUR FACT
${n.fact||'なし'}

■ 会社の課題候補｜ISSUE
${n.issue||'なし'}

■ まだ分からない／次に確認｜UNKNOWN
${n.next||'なし'}

■ 根拠・参考資料｜SOURCE
${n.source||'なし'}

まずA4 1枚相当の完成原稿を作成してください。表や箇条書きが適切なら使ってください。最後に「この内容をPowerPoint 3枚版にする場合の構成」も簡潔に示してください。`;
}
async function copySharePrompt(id){
 const n=state.notes[id]||{};
 if(!n.learned&&!n.fact&&!n.issue&&!n.next){alert('先に学習結果を保存してください。');return;}
 try{await navigator.clipboard.writeText(sharePromptFor(id));alert('社内共有資料用プロンプトをコピーしました。ChatGPTに貼り付けてください。')}catch(e){alert('コピーできませんでした。テーマを開いて学習記録を確認してください。')}
}


function importExecutiveFile(e){
 const file=e.target.files?.[0];if(!file)return;
 const reader=new FileReader();reader.onload=()=>{
  let data;try{data=JSON.parse(reader.result)}catch{alert('JSON形式を読み取れません');return}
  const arr=Array.isArray(data)?data:Array.isArray(data?.records)?data.records:null;
  if(!arr){alert('旧経営者育成サイトの記録配列ではありません。元サイトの「JSONを書き出す」を使ってください。');return}
  state.company=state.company||{};state.notes=state.notes||{};state.completed=state.completed||[];const current=state.executiveOriginalRecords||[];
  const signatures=new Set(current.map(x=>JSON.stringify(x)));
  let added=0,linked=0;
  for(const rec of arr){if(!rec||typeof rec!=='object')continue;
   const sig=JSON.stringify(rec);if(signatures.has(sig))continue;
   current.push(rec);signatures.add(sig);added++;
   const theme=rec.THEME||rec.theme||rec.title||'';
   const match=executive.find(x=>x[1]===theme);
   if(match&&rec.kind!=='analysis'&&!state.notes[match[0]]){
    const id=match[0];state.notes[id]={learned:rec.UNDERSTANDING||rec.understanding||rec.summary||'',fact:rec.FACT||rec.fact||'',issue:rec.HYPOTHESIS||rec.hypothesis||'',next:rec.HOMEWORK||rec.ACTION||rec.action||'',source:rec.MEMO||'',date:(rec.date||rec.createdAt||new Date().toISOString()).slice(0,10)};
    if(!state.completed.includes(id))state.completed.push(id);
    state.company[id]={fact:state.notes[id].fact,issue:state.notes[id].issue,unknown:state.notes[id].next,date:state.notes[id].date};linked++;
   }
  }
  state.executiveOriginalRecords=current;save();alert(`旧サイト記録を${added}件追加、体系学習へ${linked}件反映しました。元記録も保持しています。`);go('records');
 };reader.readAsText(file);
}

function render(p,arg){document.getElementById('pageTitle').textContent=Object.fromEntries(nav)[p]||'学習';const c=document.getElementById('content');if(p==='home')home(c);else if(['waste','management','executive','agri','circular'].includes(p))course(c,p);else if(p==='lesson')lesson(c,arg||state.current);else if(p==='company')company(c);else records(c)}
function weekStart(){const d=new Date(),day=(d.getDay()+6)%7;d.setHours(0,0,0,0);d.setDate(d.getDate()-day);return d}
function studiedThisWeek(ids){const ws=weekStart();return Object.entries(state.notes).some(([id,n])=>ids.includes(id)&&n.date&&new Date(n.date+'T00:00:00')>=ws)}
function home(c){const wasteWeek=studiedThisWeek(waste.map(x=>x[0])),managementWeek=studiedThisWeek(management.map(x=>x[0]));const done=[...waste,...management,...executive].filter(x=>state.completed.includes(x[0])).length;c.innerHTML=`<div class="hero"><span class="badge blue">WASTE MANAGEMENT EXECUTIVE</span><h2>工場を知り、工場を経営する。</h2><p class="muted">週2回を目安に、1回15〜30分。工場実務と工場経営をChatGPTで学び、結果を貼り付けて蓄積します。曜日固定・遅れ表示なし。</p><div class="today-flow"><span class="flow-step">1 テーマを選ぶ</span><span class="flow-arrow">→</span><span class="flow-step">2 ChatGPTで学ぶ</span><span class="flow-arrow">→</span><span class="flow-step">3 結果を貼って保存</span></div></div>
<div class="grid cols-2"><div class="card course-card"><span class="badge ${wasteWeek?'ok':''}">${wasteWeek?'✓ 今週学習済み':'今週は未実施'}</span><h3>🏭 工場実務・専門知識</h3><div class="metric">${pct('waste')}%</div><div class="progress"><i style="width:${pct('waste')}%"></i></div><p class="muted">次のテーマ：${next('waste')[0]}｜${next('waste')[1]}</p><button class="btn big-action" onclick="go('lesson','${next('waste')[0]}')">このテーマを学ぶ</button><button class="btn light" onclick="go('waste')">全テーマを見る</button></div>
<div class="card course-card"><span class="badge ${managementWeek?'ok':''}">${managementWeek?'✓ 今週学習済み':'今週は未実施'}</span><h3>📊 工場経営・経営者育成</h3><div class="metric">${pct('management')}%</div><div class="progress"><i style="width:${pct('management')}%"></i></div><p class="muted">次のテーマ：${next('management')[0]}｜${next('management')[1]}</p><button class="btn big-action" onclick="go('lesson','${next('management')[0]}')">このテーマを学ぶ</button><button class="btn light" onclick="go('management')">全テーマを見る</button></div></div>
<div class="grid cols-2" style="margin-top:16px"><div class="card"><h3>学習の積み上げ</h3><div class="metric">${done}/${24+18+len(items)}</div><p class="muted">実務の調査も学習にできます。旧経営者育成の体系学習も利用できます。農業・余熱の過去記録は削除せず保持します。</p></div><div class="card"><h3>最近の学習</h3>${recent(4)}</div></div>`}
function course(c,k){const co=courses[k],done=co.items.filter(x=>state.completed.includes(x[0])).length;c.innerHTML=`<div class="section-head"><div><h2>${co.name}</h2><div class="muted">${done}/${co.items.length} 完了｜テーマを開いてプロンプトをコピーします。</div></div><strong>${pct(k)}%</strong></div><div class="progress" style="margin-bottom:18px"><i style="width:${pct(k)}%"></i></div><div class="card">${co.items.map(x=>`<div class="lesson" data-id="${x[0]}"><div class="lesson-no">${x[0]}</div><div><div class="lesson-title">${x[1]}</div><div class="small muted">${x[2]}</div></div><span class="badge ${state.completed.includes(x[0])?'ok':''}">${state.completed.includes(x[0])?'完了':state.notes[x[0]]?'記録あり':'未実施'}</span></div>`).join('')}</div>`;c.querySelectorAll('[data-id]').forEach(e=>e.onclick=()=>go('lesson',e.dataset.id))}
function parseSiteData(text){
 const block=(text.match(/\[SITE_DATA\]([\s\S]*?)\[\/SITE_DATA\]/i)||[])[1]||text;
 const keys=['THEME','LEARNED','OUR_FACT','ISSUE','UNKNOWN','SOURCE'],out={};
 keys.forEach((k,i)=>{const next=keys.slice(i+1).join('|');const re=new RegExp('(?:^|\\n)'+k+'\\s*[:：]\\s*([\\s\\S]*?)(?=\\n(?:'+(next||'__END__')+')\\s*[:：]|$)','i');const m=block.match(re);out[k]=m?m[1].trim():''});
 return out;
}
function lesson(c,id){state.current=id;save();const it=item(id);if(!it)return go('home');const n=state.notes[id]||{};c.innerHTML=`<div class="hero"><span class="badge blue">${it.course}</span><h2>${id}｜${it.row[1]}</h2><p class="muted">今日のゴール：${it.row[2]}</p></div>
<div class="grid cols-2"><div class="card"><h3>① ChatGPTで15〜30分学習</h3><p class="muted">今日専用のプロンプトをコピーしてChatGPTに貼り付けます。最大30分。忙しい日は15分でもSTEP5まで進めて完了です。</p><button class="btn big-action" id="copyPrompt">ChatGPT学習プロンプトをコピー</button><details style="margin-top:12px"><summary>プロンプトを確認</summary><div class="prompt-box" id="promptText">${esc(promptFor(id))}</div></details></div>
<div class="card"><h3>② ChatGPTの結果をそのまま貼る</h3><p class="muted">学習終了時の [SITE_DATA] ～ [/SITE_DATA] を丸ごとコピーして貼り付けてください。</p><div class="field"><label>ChatGPTからコピーした内容</label><textarea id="bulkImport" class="import-box" placeholder="[SITE_DATA]\nTHEME: ...\nLEARNED: ...\nOUR_FACT: ...\nISSUE: ...\nUNKNOWN: ...\nSOURCE: ...\n[/SITE_DATA]"></textarea></div><button class="btn big-action" id="applyImport">貼り付け内容を反映</button></div></div>
<div class="card" style="margin-top:16px"><div class="section-head"><div><h3>③ 反映内容</h3><div class="muted">必要ならここで修正できます。保存すると「学習記録」と「会社の現在地」に同時反映します。</div></div></div><div class="form-grid"><div class="field full"><label>今日わかったこと｜KNOWLEDGE</label><textarea id="learned">${esc(n.learned||'')}</textarea></div><div class="field"><label>自社で確認できた事実｜OUR FACT</label><textarea id="fact">${esc(n.fact||'')}</textarea></div><div class="field"><label>会社の課題候補｜ISSUE</label><textarea id="issue">${esc(n.issue||'')}</textarea></div><div class="field"><label>まだ分からない／次に確認｜UNKNOWN</label><textarea id="next">${esc(n.next||'')}</textarea></div><div class="field full"><label>根拠・参考資料｜SOURCE</label><textarea id="source">${esc(n.source||'')}</textarea></div></div><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" id="saveNote">保存</button><button class="btn secondary" id="toggleDone">${state.completed.includes(id)?'完了を取り消す':'保存して完了'}</button><button class="btn light" id="sharePrompt">共有資料プロンプトをコピー</button></div></div>`;
document.getElementById('copyPrompt').onclick=async()=>{try{await navigator.clipboard.writeText(promptFor(id));alert('学習プロンプトをコピーしました。ChatGPTに貼り付けて開始してください。')}catch(e){alert('コピーできませんでした。プロンプト表示から手動でコピーしてください。')}};
document.getElementById('applyImport').onclick=()=>{const d=parseSiteData(document.getElementById('bulkImport').value);if(!d.LEARNED&&!d.OUR_FACT&&!d.ISSUE&&!d.UNKNOWN){alert('サイト反映用データを読み取れませんでした。ChatGPTの [SITE_DATA] ブロックを丸ごと貼り付けてください。');return;}document.getElementById('learned').value=d.LEARNED||'';document.getElementById('fact').value=(d.OUR_FACT||'').replace(/^なし$/,'');document.getElementById('issue').value=(d.ISSUE||'').replace(/^なし$/,'');document.getElementById('next').value=(d.UNKNOWN||'').replace(/^なし$/,'');document.getElementById('source').value=(d.SOURCE||'').replace(/^なし$/,'');alert('反映しました。内容を確認して「保存」または「保存して完了」を押してください。')};
const collect=()=>{state.notes[id]={learned:document.getElementById('learned').value,fact:document.getElementById('fact').value,issue:document.getElementById('issue').value,next:document.getElementById('next').value,source:document.getElementById('source').value,date:new Date().toISOString().slice(0,10)};state.company=state.company||{};state.company[id]={fact:state.notes[id].fact,issue:state.notes[id].issue,unknown:state.notes[id].next,date:state.notes[id].date};save()};
document.getElementById('saveNote').onclick=()=>{collect();alert('学習記録と会社の現在地に保存しました')};document.getElementById('toggleDone').onclick=()=>{collect();state.completed=state.completed.includes(id)?state.completed.filter(x=>x!==id):[...state.completed,id];save();render('lesson',id)};document.getElementById('sharePrompt').onclick=()=>{collect();copySharePrompt(id)}}
function company(c){state.company=state.company||{};const rows=Object.entries(state.company).filter(([,x])=>x.fact||x.issue||x.unknown).sort((a,b)=>(b[1].date||'').localeCompare(a[1].date||''));const facts=rows.filter(([,x])=>x.fact).length,issues=rows.filter(([,x])=>x.issue).length,unknown=rows.filter(([,x])=>x.unknown).length;c.innerHTML=`<div class="hero"><span class="badge blue">OUR COMPANY</span><h2>会社の現在地</h2><p class="muted">毎日の学習から「確認できた事実・課題候補・未確認事項」だけを自動で集約します。ここで新たに入力する必要はありません。</p></div><div class="grid cols-3"><div class="card"><div class="small muted">事実があるテーマ</div><div class="metric">${facts}</div></div><div class="card"><div class="small muted">課題候補があるテーマ</div><div class="metric">${issues}</div></div><div class="card"><div class="small muted">未確認があるテーマ</div><div class="metric">${unknown}</div></div></div><div class="table-wrap" style="margin-top:16px"><table><thead><tr><th>分野・テーマ</th><th>OUR FACT｜確認済み</th><th>ISSUE｜課題候補</th><th>UNKNOWN｜未確認</th><th></th></tr></thead><tbody>${rows.map(([id,x])=>{const it=item(id);return `<tr><td><span class="badge">${id}</span><br><b>${it?esc(it.row[1]):id}</b></td><td>${nl(x.fact)}</td><td>${nl(x.issue)}</td><td>${nl(x.unknown)}</td><td><button class="btn light" onclick="go('lesson','${id}')">開く</button></td></tr>`}).join('')||'<tr><td colspan="5" class="empty">まだ会社情報はありません。学習後のサイト反映用データを貼り付けると、ここへ自動で蓄積されます。</td></tr>'}</tbody></table></div>`}
function nl(v=''){return esc(v).replace(/\n/g,'<br>')}
function recent(limit=999){const rows=Object.entries(state.notes).filter(([,n])=>n.learned||n.fact||n.next).sort((a,b)=>(b[1].date||'').localeCompare(a[1].date||'')).slice(0,limit);return rows.length?rows.map(([id,n])=>{const it=item(id);return `<div class="list-row"><span class="badge ${state.completed.includes(id)?'ok':''}">${id}</span><div><b>${it?it.row[1]:id}</b><div class="small muted">${esc((n.learned||'').slice(0,80))}</div></div><div class="row-actions"><button class="btn light" onclick="go('lesson','${id}')">開く</button><button class="btn light" onclick="copySharePrompt('${id}')">共有資料</button></div></div>`}).join(''):'<div class="empty">まだ学習記録はありません。</div>'}
function records(c){const old=(state.executiveOriginalRecords||[]);c.innerHTML=`<div class="section-head"><div><h2>学習記録</h2><div class="muted">工場実務・工場経営の学習履歴を一元管理します。過去の農業・余熱の記録も保持します。必要なテーマだけ「共有資料」を押すと、A4 1枚の社内共有資料を作るChatGPT用プロンプトをコピーできます。</div></div></div><div class="card" style="margin-top:16px"><h3>旧・経営者育成サイトの記録を取り込む</h3><p class="muted">旧 Executive Development の「JSONを書き出す」で取得したファイルを選択。既存の廃棄物記録は消さず、重複を避けて追加します。元の分析記録はそのまま保持します。</p><p class="muted">取り込み済み：${old.length}件</p><details><summary>旧サイトから取り込んだ記録を見る</summary><div class="table-wrap">${old.map(r=>`<div class="list-row"><b>${esc(r.THEME||r.theme||'テーマ未設定')}</b>｜${esc(r.BUSINESS||'')}｜${esc(r.date||'')}<div class="small">${esc((r.UNDERSTANDING||r.FACT||'').slice(0,240))}</div></div>`).join('')||'まだありません'}</div></details><input type="file" id="execImport" accept=".json,application/json"><p class="small muted">※旧サイトのZIPはプログラムです。実際の学習履歴を移すには旧サイトから出力したJSONが必要です。</p><div id="execImportResult" class="small"></div></div>${recent()}`;const file=c.querySelector('#execImport');if(file)file.onchange=importExecutiveFile}
function esc(v=''){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
document.getElementById('menuBtn').onclick=()=>document.getElementById('sidebar').classList.toggle('open');document.getElementById('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`circular-learning-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)};document.getElementById('importFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{if(confirm('現在のデータをバックアップ内容で置き換えますか？')){state={...fresh(),...JSON.parse(r.result)};save();go('home')}}catch(e){alert('JSONを読み込めませんでした')}};r.readAsText(f)};renderNav();render('home');
