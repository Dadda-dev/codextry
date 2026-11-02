export const restaurant = {
 name: 'LUMIÈRE', subtitle: 'Cucina Contemporanea', email: 'prenotazioni@lumiere.example', phone: '',
 address: 'Via dell’Ulivo 12 · città da definire', hours: 'Martedì — Domenica, 19:00 — 23:00',
 directionsUrl: '', social: [] as {name:string;url:string}[],
 hero: {title: 'L’arte di vivere il gusto', description: 'Radici italiane. Spirito contemporaneo.\nIl piacere di sentirsi nel posto giusto.'},
 images: {hero:'/images/hero.svg',chef:'/images/chef.svg',room:'/images/room.svg',pasta:'/images/pasta.svg',dessert:'/images/dessert.svg',vegetables:'/images/vegetables.svg'},
};
export const categories = ['Antipasti','Primi','Secondi','Dessert','Bevande'] as const;
export type Category = typeof categories[number];
export type Dish = {name:string;description:string;price:number};
export const menu: Record<Category,Dish[]> = {
 Antipasti:[{name:'L’orto, in una stagione',description:'Verdure di stagione, crema di mandorle e olio alle erbe.',price:22},{name:'Battuta di manzo',description:'Manzo al coltello, senape in grani, capperi e pane croccante.',price:24},{name:'Il mare e gli agrumi',description:'Crudo di ricciola, finocchio, arancia e olio al limone.',price:26},{name:'Uovo, bosco e terra',description:'Uovo morbido, funghi arrostiti e spuma di patate.',price:20}],
 Primi:[{name:'Risotto alla luce',description:'Riso Carnaroli, zafferano, limone e polvere di olive.',price:28},{name:'Il nostro plin',description:'Pasta ripiena di arrosto, fondo bruno e timo.',price:30},{name:'Spaghetto di mare',description:'Spaghetti, vongole, prezzemolo e bottarga.',price:29},{name:'Raviolo d’autunno',description:'Zucca, burro nocciola, salvia e amaretti.',price:26}],
 Secondi:[{name:'Il branzino',description:'Filetto arrosto, sedano rapa e salsa alle erbe.',price:36},{name:'Manzo e memoria',description:'Filetto di manzo, patata fondente e riduzione al vino rosso.',price:42},{name:'Anatra, tra dolce e amaro',description:'Petto d’anatra rosato, radicchio e salsa all’arancia.',price:34},{name:'Il cavolfiore',description:'Cavolfiore al forno, ceci, tahina e melagrana.',price:28}],
 Dessert:[{name:'Ricordo di un tiramisù',description:'Mascarpone, caffè, savoiardo e cacao amaro.',price:14},{name:'Cioccolato, in tre atti',description:'Fondente, cremoso al latte e gelato al cioccolato.',price:16},{name:'Pera e gentilezza',description:'Pera speziata, vaniglia e crumble alle mandorle.',price:14},{name:'Limone, quasi una nuvola',description:'Mousse al limone, meringa e basilico.',price:14}],
 Bevande:[{name:'Calice di bianco',description:'Selezione italiana della casa, 125 ml.',price:9},{name:'Calice di rosso',description:'Selezione italiana della casa, 125 ml.',price:10},{name:'Giardino analcolico',description:'Infuso botanico, mela verde e tonica.',price:12},{name:'Acqua minerale',description:'Naturale o frizzante, 750 ml.',price:4}]
};
export const testimonials = [{quote:'Una cucina che sorprende con delicatezza. Ogni piatto racconta qualcosa.',name:'Giulia M.'},{quote:'L’atmosfera, i dettagli, il tempo dedicato a noi. Una serata da ricordare.',name:'Andrea e Sofia'},{quote:'Sapori familiari, visti con occhi nuovi. È questa la bellezza di tornare a tavola.',name:'Lorenzo P.'}];
export const euro = (value:number) => new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(value);
