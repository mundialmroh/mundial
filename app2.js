// FIREBASE CONFIG - inicializado en el bloque de scripts del head

// CONSTANTES
const ADMIN_CEDULA       = "71313689";
const ADMIN_EMAIL        = ADMIN_CEDULA + "@mroh.app";
const API_KEY_FOOTBALL   = "8ccb25f8512b4cc51e437eae1b0edca7";

// ============================================================
// AUTORIZACIÓN DE DATOS
// ============================================================
function verificarAutorizacion() {
  const autorizado = localStorage.getItem('mroh_datos_autorizado');
  const modal = document.getElementById('modal-autorizacion');
  if (autorizado === '1') {
    if (modal) modal.style.display = 'none';
  }
  // Si no está autorizado, el modal permanece visible (display:flex por defecto)
}

function aceptarAutorizacion() {
  localStorage.setItem('mroh_datos_autorizado', '1');
  const modal = document.getElementById('modal-autorizacion');
  if (modal) modal.style.display = 'none';
}

// ============================================================
// CAMBIO DE CONTRASEÑA OBLIGATORIO (primer ingreso)
// ============================================================
function verificarCambioPassword(perfil) {
  if (perfil && perfil.debeActualizarPass) {
    const modal = document.getElementById('modal-cambio-pass');
    if (modal) modal.style.display = 'flex';
  }
}

async function guardarNuevaPassword() {
  const p1 = document.getElementById('nueva-pass-1').value;
  const p2 = document.getElementById('nueva-pass-2').value;
  const errEl = document.getElementById('cambio-pass-err');
  errEl.style.display = 'none';

  if (!p1 || p1.length < 6) { errEl.textContent = 'La contraseña debe tener al menos 6 caracteres'; errEl.style.display = 'block'; return; }
  if (p1 !== p2) { errEl.textContent = 'Las contraseñas no coinciden'; errEl.style.display = 'block'; return; }

  try {
    const user = firebase.auth().currentUser;
    await user.updatePassword(p1);
    // Remove flag in Firestore
    await db.collection('usuarios').doc(user.uid).update({ debeActualizarPass: false });
    currentUser.debeActualizarPass = false;
    document.getElementById('modal-cambio-pass').style.display = 'none';
    toast('✓ Contraseña actualizada correctamente');
  } catch(e) {
    errEl.textContent = 'Error: ' + (e.message || 'No se pudo actualizar');
    errEl.style.display = 'block';
  }
}

const EMAILJS_SERVICE_ID = "service_lsd2gu4";
const EMAILJS_TEMPLATE   = "template_t8roo8b";

const PARTIDOS = [
  {id:"A1",grupo:"Grupo A",local:"México",visitante:"Sudáfrica",fecha:"11 Jun",sede:"Ciudad de México"},
  {id:"A2",grupo:"Grupo A",local:"Corea del Sur",visitante:"Rep. Checa",fecha:"11 Jun",sede:"Guadalajara"},
  {id:"A3",grupo:"Grupo A",local:"Rep. Checa",visitante:"Sudáfrica",fecha:"18 Jun",sede:"Atlanta"},
  {id:"A4",grupo:"Grupo A",local:"México",visitante:"Corea del Sur",fecha:"18 Jun",sede:"Guadalajara"},
  {id:"A5",grupo:"Grupo A",local:"Rep. Checa",visitante:"México",fecha:"24 Jun",sede:"Ciudad de México"},
  {id:"A6",grupo:"Grupo A",local:"Sudáfrica",visitante:"Corea del Sur",fecha:"24 Jun",sede:"Monterrey"},
  {id:"B1",grupo:"Grupo B",local:"Canadá",visitante:"Bosnia y Herz.",fecha:"12 Jun",sede:"Toronto"},
  {id:"B2",grupo:"Grupo B",local:"Qatar",visitante:"Suiza",fecha:"13 Jun",sede:"San Francisco"},
  {id:"B3",grupo:"Grupo B",local:"Suiza",visitante:"Bosnia y Herz.",fecha:"18 Jun",sede:"Los Ángeles"},
  {id:"B4",grupo:"Grupo B",local:"Canadá",visitante:"Qatar",fecha:"18 Jun",sede:"Vancouver"},
  {id:"B5",grupo:"Grupo B",local:"Suiza",visitante:"Canadá",fecha:"24 Jun",sede:"Vancouver"},
  {id:"B6",grupo:"Grupo B",local:"Bosnia y Herz.",visitante:"Qatar",fecha:"24 Jun",sede:"Seattle"},
  {id:"C1",grupo:"Grupo C",local:"Brasil",visitante:"Marruecos",fecha:"13 Jun",sede:"Nueva York"},
  {id:"C2",grupo:"Grupo C",local:"Haití",visitante:"Escocia",fecha:"13 Jun",sede:"Filadelfia"},
  {id:"C3",grupo:"Grupo C",local:"Brasil",visitante:"Haití",fecha:"19 Jun",sede:"Filadelfia"},
  {id:"C4",grupo:"Grupo C",local:"Escocia",visitante:"Marruecos",fecha:"19 Jun",sede:"Boston"},
  {id:"C5",grupo:"Grupo C",local:"Escocia",visitante:"Brasil",fecha:"24 Jun",sede:"Miami"},
  {id:"C6",grupo:"Grupo C",local:"Marruecos",visitante:"Haití",fecha:"24 Jun",sede:"Atlanta"},
  {id:"D1",grupo:"Grupo D",local:"Estados Unidos",visitante:"Paraguay",fecha:"12 Jun",sede:"Los Ángeles"},
  {id:"D2",grupo:"Grupo D",local:"Australia",visitante:"Turquía",fecha:"13 Jun",sede:"Vancouver"},
  {id:"D3",grupo:"Grupo D",local:"Turquía",visitante:"Paraguay",fecha:"19 Jun",sede:"San Francisco"},
  {id:"D4",grupo:"Grupo D",local:"Estados Unidos",visitante:"Australia",fecha:"19 Jun",sede:"Seattle"},
  {id:"D5",grupo:"Grupo D",local:"Turquía",visitante:"Estados Unidos",fecha:"25 Jun",sede:"Los Ángeles"},
  {id:"D6",grupo:"Grupo D",local:"Paraguay",visitante:"Australia",fecha:"25 Jun",sede:"San Francisco"},
  {id:"E1",grupo:"Grupo E",local:"Alemania",visitante:"Curazao",fecha:"14 Jun",sede:"Houston"},
  {id:"E2",grupo:"Grupo E",local:"Costa de Marfil",visitante:"Ecuador",fecha:"14 Jun",sede:"Filadelfia"},
  {id:"E3",grupo:"Grupo E",local:"Alemania",visitante:"Costa de Marfil",fecha:"20 Jun",sede:"Toronto"},
  {id:"E4",grupo:"Grupo E",local:"Ecuador",visitante:"Curazao",fecha:"20 Jun",sede:"Kansas City"},
  {id:"E5",grupo:"Grupo E",local:"Ecuador",visitante:"Alemania",fecha:"25 Jun",sede:"Nueva York"},
  {id:"E6",grupo:"Grupo E",local:"Curazao",visitante:"Costa de Marfil",fecha:"25 Jun",sede:"Filadelfia"},
  {id:"F1",grupo:"Grupo F",local:"Países Bajos",visitante:"Japón",fecha:"14 Jun",sede:"Dallas"},
  {id:"F2",grupo:"Grupo F",local:"Suecia",visitante:"Túnez",fecha:"14 Jun",sede:"Monterrey"},
  {id:"F3",grupo:"Grupo F",local:"Países Bajos",visitante:"Suecia",fecha:"20 Jun",sede:"Houston"},
  {id:"F4",grupo:"Grupo F",local:"Túnez",visitante:"Japón",fecha:"20 Jun",sede:"Monterrey"},
  {id:"F5",grupo:"Grupo F",local:"Túnez",visitante:"Países Bajos",fecha:"25 Jun",sede:"Kansas City"},
  {id:"F6",grupo:"Grupo F",local:"Japón",visitante:"Suecia",fecha:"25 Jun",sede:"Dallas"},
  {id:"G1",grupo:"Grupo G",local:"Bélgica",visitante:"Egipto",fecha:"15 Jun",sede:"Seattle"},
  {id:"G2",grupo:"Grupo G",local:"Irán",visitante:"Nueva Zelanda",fecha:"15 Jun",sede:"Los Ángeles"},
  {id:"G3",grupo:"Grupo G",local:"Bélgica",visitante:"Irán",fecha:"21 Jun",sede:"Los Ángeles"},
  {id:"G4",grupo:"Grupo G",local:"Nueva Zelanda",visitante:"Egipto",fecha:"21 Jun",sede:"Vancouver"},
  {id:"G5",grupo:"Grupo G",local:"Nueva Zelanda",visitante:"Bélgica",fecha:"26 Jun",sede:"Vancouver"},
  {id:"G6",grupo:"Grupo G",local:"Egipto",visitante:"Irán",fecha:"26 Jun",sede:"Seattle"},
  {id:"H1",grupo:"Grupo H",local:"España",visitante:"Cabo Verde",fecha:"15 Jun",sede:"Atlanta"},
  {id:"H2",grupo:"Grupo H",local:"Arabia Saudita",visitante:"Uruguay",fecha:"15 Jun",sede:"Miami"},
  {id:"H3",grupo:"Grupo H",local:"España",visitante:"Arabia Saudita",fecha:"21 Jun",sede:"Atlanta"},
  {id:"H4",grupo:"Grupo H",local:"Uruguay",visitante:"Cabo Verde",fecha:"21 Jun",sede:"Miami"},
  {id:"H5",grupo:"Grupo H",local:"Uruguay",visitante:"España",fecha:"26 Jun",sede:"Guadalajara"},
  {id:"H6",grupo:"Grupo H",local:"Cabo Verde",visitante:"Arabia Saudita",fecha:"26 Jun",sede:"Houston"},
  {id:"I1",grupo:"Grupo I",local:"Francia",visitante:"Senegal",fecha:"16 Jun",sede:"Nueva York"},
  {id:"I2",grupo:"Grupo I",local:"Irak",visitante:"Noruega",fecha:"16 Jun",sede:"Boston"},
  {id:"I3",grupo:"Grupo I",local:"Francia",visitante:"Irak",fecha:"22 Jun",sede:"Filadelfia"},
  {id:"I4",grupo:"Grupo I",local:"Noruega",visitante:"Senegal",fecha:"22 Jun",sede:"Nueva York"},
  {id:"I5",grupo:"Grupo I",local:"Senegal",visitante:"Irak",fecha:"26 Jun",sede:"Toronto"},
  {id:"I6",grupo:"Grupo I",local:"Noruega",visitante:"Francia",fecha:"26 Jun",sede:"Miami"},
  {id:"J1",grupo:"Grupo J",local:"Argentina",visitante:"Argelia",fecha:"16 Jun",sede:"Kansas City"},
  {id:"J2",grupo:"Grupo J",local:"Austria",visitante:"Jordania",fecha:"16 Jun",sede:"San Francisco"},
  {id:"J3",grupo:"Grupo J",local:"Argentina",visitante:"Austria",fecha:"22 Jun",sede:"Dallas"},
  {id:"J4",grupo:"Grupo J",local:"Jordania",visitante:"Argelia",fecha:"22 Jun",sede:"San Francisco"},
  {id:"J5",grupo:"Grupo J",local:"Jordania",visitante:"Argentina",fecha:"27 Jun",sede:"Dallas"},
  {id:"J6",grupo:"Grupo J",local:"Argelia",visitante:"Austria",fecha:"27 Jun",sede:"Kansas City"},
  {id:"K1",grupo:"Grupo K",local:"Portugal",visitante:"Rep. Dem. Congo",fecha:"17 Jun",sede:"Houston"},
  {id:"K2",grupo:"Grupo K",local:"Uzbekistán",visitante:"Colombia",fecha:"17 Jun",sede:"Ciudad de México"},
  {id:"K3",grupo:"Grupo K",local:"Portugal",visitante:"Uzbekistán",fecha:"23 Jun",sede:"Houston"},
  {id:"K4",grupo:"Grupo K",local:"Colombia",visitante:"Rep. Dem. Congo",fecha:"23 Jun",sede:"Guadalajara"},
  {id:"K5",grupo:"Grupo K",local:"Colombia",visitante:"Portugal",fecha:"27 Jun",sede:"Miami"},
  {id:"K6",grupo:"Grupo K",local:"Rep. Dem. Congo",visitante:"Uzbekistán",fecha:"27 Jun",sede:"Atlanta"},
  {id:"L1",grupo:"Grupo L",local:"Inglaterra",visitante:"Croacia",fecha:"17 Jun",sede:"Dallas"},
  {id:"L2",grupo:"Grupo L",local:"Ghana",visitante:"Panamá",fecha:"17 Jun",sede:"Toronto"},
  {id:"L3",grupo:"Grupo L",local:"Inglaterra",visitante:"Ghana",fecha:"23 Jun",sede:"Boston"},
  {id:"L4",grupo:"Grupo L",local:"Panamá",visitante:"Croacia",fecha:"23 Jun",sede:"Toronto"},
  {id:"L5",grupo:"Grupo L",local:"Croacia",visitante:"Ghana",fecha:"27 Jun",sede:"Filadelfia"},
  {id:"L6",grupo:"Grupo L",local:"Panamá",visitante:"Inglaterra",fecha:"27 Jun",sede:"Nueva York"},
  // ── DIECISEISAVOS DE FINAL ──
  {id:"D01",grupo:"16avos",local:"Sudáfrica",visitante:"Canadá",fecha:"28 Jun",sede:"Los Ángeles"},
  {id:"D02",grupo:"16avos",local:"Brasil",visitante:"Japón",fecha:"29 Jun",sede:"Houston"},
  {id:"D03",grupo:"16avos",local:"Alemania",visitante:"Paraguay",fecha:"29 Jun",sede:"Boston"},
  {id:"D04",grupo:"16avos",local:"Países Bajos",visitante:"Marruecos",fecha:"29 Jun",sede:"Monterrey"},
  {id:"D05",grupo:"16avos",local:"Costa de Marfil",visitante:"Noruega",fecha:"30 Jun",sede:"Dallas"},
  {id:"D06",grupo:"16avos",local:"Francia",visitante:"Suecia",fecha:"30 Jun",sede:"Nueva York"},
  {id:"D07",grupo:"16avos",local:"México",visitante:"Ecuador",fecha:"30 Jun",sede:"Ciudad de México"},
  {id:"D08",grupo:"16avos",local:"Inglaterra",visitante:"Rep. Dem. Congo",fecha:"1 Jul",sede:"Atlanta"},
  {id:"D09",grupo:"16avos",local:"Bélgica",visitante:"Senegal",fecha:"1 Jul",sede:"Seattle"},
  {id:"D10",grupo:"16avos",local:"Estados Unidos",visitante:"Bosnia y Herz.",fecha:"1 Jul",sede:"San Francisco"},
  {id:"D11",grupo:"16avos",local:"España",visitante:"Austria",fecha:"2 Jul",sede:"Los Ángeles"},
  {id:"D12",grupo:"16avos",local:"Portugal",visitante:"Croacia",fecha:"2 Jul",sede:"Kansas City"},
  {id:"D13",grupo:"16avos",local:"Suiza",visitante:"Argelia",fecha:"3 Jul",sede:"Vancouver"},
  {id:"D14",grupo:"16avos",local:"Australia",visitante:"Egipto",fecha:"3 Jul",sede:"Dallas"},
  {id:"D15",grupo:"16avos",local:"Argentina",visitante:"Cabo Verde",fecha:"3 Jul",sede:"Miami"},
  {id:"D16",grupo:"16avos",local:"Colombia",visitante:"Ghana",fecha:"3 Jul",sede:"Kansas City"},
  // ── OCTAVOS DE FINAL ──
  {id:"O01",grupo:"8avos",local:"Canadá",visitante:"Marruecos",fecha:"4 Jul",sede:"Por confirmar"},
  {id:"O02",grupo:"8avos",local:"Paraguay",visitante:"Francia",fecha:"4 Jul",sede:"Por confirmar"},
  {id:"O03",grupo:"8avos",local:"Brasil",visitante:"Noruega",fecha:"5 Jul",sede:"Por confirmar"},
  {id:"O04",grupo:"8avos",local:"México",visitante:"Inglaterra",fecha:"5 Jul",sede:"Por confirmar"},
  {id:"O05",grupo:"8avos",local:"Portugal",visitante:"España",fecha:"6 Jul",sede:"Por confirmar"},
  {id:"O06",grupo:"8avos",local:"Estados Unidos",visitante:"Bélgica",fecha:"6 Jul",sede:"Por confirmar"},
  {id:"O07",grupo:"8avos",local:"Por confirmar",visitante:"Por confirmar",fecha:"7 Jul",sede:"Por confirmar"},
  {id:"O08",grupo:"8avos",local:"Por confirmar",visitante:"Por confirmar",fecha:"7 Jul",sede:"Por confirmar"},
  // ── CUARTOS DE FINAL ──
  {id:"Q01",grupo:"Cuartos",local:"Francia",visitante:"Marruecos",fecha:"9 Jul",sede:"Por confirmar"},
  {id:"Q02",grupo:"Cuartos",local:"España",visitante:"Bélgica",fecha:"10 Jul",sede:"Por confirmar"},
  {id:"Q03",grupo:"Cuartos",local:"Noruega",visitante:"Inglaterra",fecha:"11 Jul",sede:"Por confirmar"},
  {id:"Q04",grupo:"Cuartos",local:"Por confirmar",visitante:"Por confirmar",fecha:"11 Jul",sede:"Por confirmar"},
  // ── SEMIFINALES ──
  {id:"S01",grupo:"Semifinales",local:"Por confirmar",visitante:"Por confirmar",fecha:"15 Jul",sede:"Por confirmar"},
  {id:"S02",grupo:"Semifinales",local:"Por confirmar",visitante:"Por confirmar",fecha:"16 Jul",sede:"Por confirmar"},
  // ── FINAL ──
  {id:"F01",grupo:"Final",local:"Por confirmar",visitante:"Por confirmar",fecha:"19 Jul",sede:"Por confirmar"},
  {id:"F02",grupo:"Final",local:"Por confirmar",visitante:"Por confirmar",fecha:"19 Jul",sede:"Por confirmar"},
];

const EQUIPOS = [...new Set(PARTIDOS.flatMap(p=>[p.local,p.visitante]))].sort();
const GRUPOS  = [...new Set(PARTIDOS.map(p=>p.grupo))];
const FECHAS  = [...new Set(PARTIDOS.map(p=>p.fecha))];

// Helper para ordenar fechas "DD Mon" correctamente
function sortFechas(fechas) {
  const meses = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12,
                 Ene:1,Feb:2,Mar:3,Abr:4,May:5,Jun:6,Jul:7,Ago:8,Sep:9,Oct:10,Nov:11,Dic:12};
  return [...fechas].sort((a,b) => {
    const [da, ma] = a.split(' ');
    const [db, mb] = b.split(' ');
    const numA = (meses[ma]||0)*100 + parseInt(da);
    const numB = (meses[mb]||0)*100 + parseInt(db);
    return numA - numB;
  });
}

// ESTADO
let currentUser = null;
let apuestas    = [];
let resultados  = {};
let nextId      = 1;
let unsubApuestas = null;

// CACHÉ
let _cachedUsuarios   = null;
let _horariosPartidos = {}; // { partidoId: isoString } hora de inicio de cada partido  // cache de usuarios Firestore
let _cachedApuestasAd = null;  // cache de apuestas para admin
let tablaApuestasCache = [];   // cache de apuestas para tabla
let _cacheTs          = 0;     // timestamp del último fetch
const CACHE_TTL       = 60000; // 60 segundos de vida del caché

const CRITERIOS_DEFAULT = [
  {id:"resultado_exacto",nombre:"Resultado exacto",  desc:"Marcador final correcto",icon:"🎯",pts:3,fijo:true},
  {id:"ganador_correcto",nombre:"Ganador correcto",  desc:"Acertó quién gana",      icon:"✅",pts:1,fijo:true},
  {id:"empate_correcto", nombre:"Empate acertado",   desc:"Predijo el empate",      icon:"🤝",pts:1,fijo:true},
  {id:"campeon",         nombre:"Campeón acertado",  desc:"Acertó el campeón",      icon:"🏆",pts:5,fijo:true},
  {id:"subcampeon",      nombre:"Subcampeón acertado",desc:"Acertó el subcampeón",  icon:"🥈",pts:3,fijo:true},
  {id:"tercer_puesto",   nombre:"3er puesto acertado",desc:"Acertó el tercer puesto",icon:"🥉",pts:2,fijo:true},
];
let criterios = CRITERIOS_DEFAULT.map(c=>({...c}));

async function saveCriterios() {
  await db.collection('config').doc('criterios').set({ lista: criterios });
  renderPtsInfo(); renderApuestas(); renderTabla();
}

async function cargarCriterios() {
  try {
    const snap = await db.collection('config').doc('criterios').get();
    if (snap.exists && snap.data().lista && snap.data().lista.length > 0) {
      criterios = snap.data().lista;
    }
  } catch(e) { console.error('Error cargando criterios:', e); }
  renderPtsInfo();
}

// CONFIG DE PARTIDOS (guardado en Firestore)
let configPartidos = {}; // { partidoId: { cierreISO, tarjetas, esquinas } }
let configGlobal   = {}; // { cierreGrupos, cierreElim, ocultarApuestas }

function horaColombiaToDate(iso) {
  if (iso.endsWith('Z') || iso.includes('+') || iso.slice(-6,-5) === '-') return new Date(iso);
  return new Date(iso + '-05:00');
}

function estaAbierto(partidoId, tipo) {
  const cfg = configPartidos[partidoId];
  const ahora = new Date();
  if (cfg && cfg.cierreISO) return new Date(cfg.cierreISO) > ahora;
  const cierreGlobal = tipo === 'grupo' ? configGlobal.cierreGrupos : configGlobal.cierreElim;
  if (cierreGlobal) return new Date(cierreGlobal) > ahora;
  const horaInicio = _horariosPartidos[partidoId];
  if (horaInicio) {
    const cierre = new Date(horaColombiaToDate(horaInicio).getTime() - 30 * 60 * 1000);
    return cierre > ahora;
  }
  return true;
}

function tiempoRestante(partidoId, tipo) {
  const cfg = configPartidos[partidoId];
  const ahora = new Date();
  let cierre = null;
  if (cfg && cfg.cierreISO) cierre = new Date(cfg.cierreISO);
  else {
    const cg = tipo === 'grupo' ? configGlobal.cierreGrupos : configGlobal.cierreElim;
    if (cg) cierre = new Date(cg);
  }
  if (!cierre) {
    const horaInicio = _horariosPartidos[partidoId];
    if (horaInicio) cierre = new Date(horaColombiaToDate(horaInicio).getTime() - 30 * 60 * 1000);
  }
  if (!cierre) return null;
  const diff = cierre - ahora;
  if (diff <= 0) return 'cerrado';
  const h = Math.floor(diff/3600000);
  const m = Math.floor((diff%3600000)/60000);
  if (h > 48) return Math.floor(h/24) + ' días';
  if (h > 0) return h + 'h ' + m + 'm';
  return m + ' min';
}

async function cargarConfigPartidos() {
  try {
    const snap = await db.collection("config").doc("partidos").get();
    if (snap.exists) configPartidos = snap.data() || {};
    const snap2 = await db.collection("config").doc("global").get();
    if (snap2.exists) {
      configGlobal = snap2.data() || {};
      const cg = document.getElementById('cierre-global-grupos');
      const ce = document.getElementById('cierre-global-elim');
      const oa = document.getElementById('ocultar-apuestas');
      if (cg && configGlobal.cierreGrupos) cg.value = configGlobal.cierreGrupos;
      if (ce && configGlobal.cierreElim)   ce.value = configGlobal.cierreElim;
      if (oa) oa.checked = !!configGlobal.ocultarApuestas;
    }
    // Re-render config partidos si ya está visible para mostrar campos de desempate
    const panel = document.getElementById('admin-panel-config');
    if (panel && panel.style.display !== 'none') renderConfigPartidos();
  } catch(e) { console.error('Error cargando config:', e); }
}

async function saveCierreGlobal() {
  const cg = document.getElementById('cierre-global-grupos')?.value || '';
  const ce = document.getElementById('cierre-global-elim')?.value   || '';
  configGlobal.cierreGrupos = cg;
  configGlobal.cierreElim   = ce;
  await db.collection("config").doc("global").set(configGlobal, {merge:true});
  toast('✓ Cierre global guardado');
  renderPartidos();
}

async function toggleWhatsApp() {
  configGlobal.waDeshabilitado = !configGlobal.waDeshabilitado;
  await db.collection('config').doc('global').set(configGlobal, {merge:true});
  const estado = configGlobal.waDeshabilitado ? 'deshabilitado' : 'habilitado';
  toast('📱 WhatsApp ' + estado);
  loadCierreGlobalUI();
}

async function saveConfigGeneral() {
  const oa = document.getElementById('ocultar-apuestas')?.checked || false;
  configGlobal.ocultarApuestas = oa;
  await db.collection("config").doc("global").set(configGlobal, {merge:true});
  toast('✓ Configuración guardada');
}

async function saveCierrePartido(pid, value) {
  if (!configPartidos[pid]) configPartidos[pid] = {};
  configPartidos[pid].cierreISO = value;
  await db.collection("config").doc("partidos").set(configPartidos, {merge:false});
  toast('✓ Cierre guardado para ' + pid);
  renderPartidos();
}

async function saveDesempate(pid, campo, value) {
  if (!configPartidos[pid]) configPartidos[pid] = {};
  configPartidos[pid][campo] = value;
  await db.collection("config").doc("partidos").set(configPartidos, {merge:false});
  toast('✓ Desempate actualizado');
}

async function saveDesempateValor(pid, campo, value) {
  if (!configPartidos[pid]) configPartidos[pid] = {};
  configPartidos[pid][campo] = parseInt(value) || 0;
  await db.collection("config").doc("partidos").set(configPartidos, {merge:false});
  toast('✓ Valor guardado');
}

function getPts(id){return (criterios.find(c=>c.id===id)||{pts:0}).pts;}

// AUTH OBSERVER
auth.onAuthStateChanged(async user => {
  console.log("onAuthStateChanged fired, user:", user ? user.email : "null");
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
  if (user) {
    // Cargar perfil desde servidor
    const snap = await db.collection("usuarios").doc(user.uid).get({ source: "server" });
    const perfil = snap.exists ? snap.data() : {};
    currentUser = {
      uid:              user.uid,
      email:            user.email,
      nombre:           perfil.nombre || user.email,
      celular:          perfil.celular || "",
      rol:              perfil.rol || "user",
      invitadoPor:      perfil.invitadoPor || null,
      debeActualizarPass: perfil.debeActualizarPass || false
    };
    showApp();
    verificarCambioPassword(perfil);
  } else {
    currentUser = null;
    showAuth();
    // Si hay ref en URL, verificar invitacion despues de mostrar auth
    const params = new URLSearchParams(window.location.search);
    if (params.get("ref")) {
      verificarInvitacion();
    }
  }
});

let unsubUserProfile = null;

function showApp() {
  document.getElementById("auth-overlay").style.display  = "none";
  document.getElementById("main-header").style.display   = "";
  const footer = document.getElementById("main-footer"); if(footer) footer.style.display = "";
  document.getElementById("main-nav").style.display      = "";
  document.getElementById("main-content").style.display  = "";
  actualizarHeaderUsuario();
  renderPtsInfo();
  // Cargar datos tras autenticación
  cargarPartidosElim().then(() => cargarResultados());
  suscribirApuestas();

  // Escuchar cambios de rol en tiempo real
  if (unsubUserProfile) unsubUserProfile();
  unsubUserProfile = db.collection("usuarios").doc(currentUser.uid)
    .onSnapshot(snap => {
      if (!snap.exists) return;
      const data = snap.data();
      const rolAnterior = currentUser.rol;
      currentUser.rol         = data.rol || "user";
      currentUser.nombre      = data.nombre || currentUser.nombre;
      currentUser.invitadoPor = data.invitadoPor || null;
      actualizarHeaderUsuario();

      // Si cambió el rol, actualizar navegación y suscripciones
      if (rolAnterior !== currentUser.rol) {
        const navAdmin = document.getElementById("nav-admin");
        if (currentUser.rol === "admin") {
          navAdmin.style.display = "";
          toast("👑 Ahora eres administrador");
        } else {
          navAdmin.style.display = "none";
          toast("👤 Tu rol ha cambiado a participante");
        }
        // Resuscribir apuestas con nuevos permisos
        suscribirApuestas();
      }
    });
}

function actualizarHeaderUsuario() {
  const ini = currentUser.nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  document.getElementById("hdr-avatar").textContent  = ini;
  document.getElementById("hdr-nombre").textContent  = currentUser.nombre;
  document.getElementById("hdr-rol").textContent     = currentUser.rol==="admin" ? "👑 Administrador" : "👤 Participante";
  if (currentUser.rol === "admin") {
    document.getElementById("nav-admin").style.display = "";
  }
}

function showAuth() {
  document.getElementById("auth-overlay").style.display  = "flex";
  document.getElementById("main-header").style.display   = "none";
  const footer = document.getElementById("main-footer"); if(footer) footer.style.display = "none";
  document.getElementById("main-nav").style.display      = "none";
  document.getElementById("main-content").style.display  = "none";
  document.getElementById("nav-admin").style.display     = "none";
  if (unsubApuestas) { unsubApuestas(); unsubApuestas = null; }
}

// SUSCRIPCIÓN TIEMPO REAL A APUESTAS
function suscribirApuestas() {
  if (unsubApuestas) unsubApuestas();
  let query = db.collection("apuestas");
  // Si ocultarApuestas está activo, usuario normal solo ve las suyas
  const ocultarParaUser = configGlobal.ocultarApuestas && currentUser.rol !== "admin";
  if (currentUser.rol !== "admin" || ocultarParaUser) {
    query = query.where("uid", "==", currentUser.uid);
  }
  unsubApuestas = query.onSnapshot(snap => {
    apuestas = snap.docs.map(d => ({id: d.id, ...d.data()}));
    if (apuestas.length > 0) {
      const nums = apuestas.map(a => Number(a.numId)||0);
      nextId = Math.max(...nums) + 1;
    }
    renderApuestas();
    renderTabla();
    renderResultados();
  });
}

// AUTH FUNCIONES
function authTab(t) {
  document.getElementById("form-login").style.display   = t==="login"    ? "block" : "none";
  document.getElementById("form-registro").style.display= t==="registro" ? "block" : "none";
  document.getElementById("form-reset").style.display   = t==="reset"    ? "block" : "none";
  document.getElementById("tab-login-btn").classList.toggle("active", t==="login");
  document.getElementById("tab-reg-btn").classList.toggle("active",   t==="registro");
  clearAuthMsg();
}
function showResetPass() { authTab("reset"); }
function showAuthErr(msg){const e=document.getElementById("auth-err");e.textContent=msg;e.classList.add("show");document.getElementById("auth-ok").classList.remove("show");}
function showAuthOk(msg){const e=document.getElementById("auth-ok");e.textContent=msg;e.classList.add("show");document.getElementById("auth-err").classList.remove("show");}
function clearAuthMsg(){document.getElementById("auth-err").classList.remove("show");document.getElementById("auth-ok").classList.remove("show");}
function setBtnLoad(id,loading,txt){const b=document.getElementById(id);b.disabled=loading;b.textContent=loading?"⏳ Espera...":txt;}

async function doLogin() {
  const cedula = document.getElementById("l-cedula").value.trim();
  const pass   = document.getElementById("l-pass").value;
  if (!cedula||!pass) { showAuthErr("Completa todos los campos"); return; }
  const email = cedula + "@mroh.app";
  setBtnLoad("btn-login", true, "Ingresar →");
  try {
    await auth.signInWithEmailAndPassword(email, pass);
  } catch(e) {
    const msgs = {
      "auth/user-not-found":  "Correo no registrado",
      "auth/wrong-password":  "Contraseña incorrecta",
      "auth/invalid-email":   "Cédula inválida",
      "auth/too-many-requests":"Demasiados intentos. Espera un momento.",
      "auth/invalid-credential": "Correo o contraseña incorrectos"
    };
    showAuthErr(msgs[e.code] || e.message);
  }
  setBtnLoad("btn-login", false, "Ingresar →");
}

async function doRegistro() {
  // Verificar invitacion (excepto admin)
  const emailVal = document.getElementById("r-email").value.trim();
  if (emailVal !== ADMIN_EMAIL && !invitacionValida) {
    showAuthErr("Necesitas un link de invitación válido para registrarte");
    return;
  }
  const nom   = document.getElementById("r-nom").value.trim();
  const cel   = document.getElementById("r-cel").value.trim();
  const email = emailVal;
  const pass  = document.getElementById("r-pass").value;
  const pass2 = document.getElementById("r-pass2").value;
  if (!nom||!cel||!email||!pass) { showAuthErr("Completa todos los campos"); return; }
  if (pass.length < 6) { showAuthErr("Contraseña mínimo 6 caracteres"); return; }
  if (pass !== pass2)  { showAuthErr("Las contraseñas no coinciden"); return; }
  setBtnLoad("btn-reg", true, "Crear cuenta →");
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    const rol  = email === ADMIN_EMAIL ? "admin" : "user";
    // Guardar perfil en Firestore
    // Solo agregar (invitado) si viene de invitación personal, no de cargue masivo
    const esInvitadoReal = invitacionData && invitacionData.uid && !invitacionData.esCargue;
    const nombreFinal = esInvitadoReal ? nom + ' (invitado)' : nom;
    const perfil = {
      nombre: nombreFinal, celular: cel, email: email,
      rol: rol, creado: firebase.firestore.FieldValue.serverTimestamp()
    };
    // Agregar datos de quien invitó si existe
    if (invitacionData) {
      perfil.invitadoPor = invitacionData.uid || '';
      perfil.invitadoPorNombre = invitacionData.nombre || '';
    }
    await db.collection("usuarios").doc(cred.user.uid).set(perfil);
    console.log("Perfil guardado en Firestore:", cred.user.uid);
    // Marcar invitacion como usada
    if (invitacionData && invitacionData.token && invitacionData.token !== 'pending') {
      await marcarInvitacionUsada(invitacionData.token);
    }
    await guardarInvitacion(cred.user.uid);
    showAuthOk("✓ Cuenta creada. Bienvenido!");
  } catch(e) {
    console.error("Error en registro:", e);
    const msgs = {
      "auth/email-already-in-use": "Este correo ya está registrado",
      "auth/invalid-email":        "Correo inválido",
      "auth/weak-password":        "Contraseña muy débil",
      "permission-denied":         "Error de permisos. Contacta al administrador."
    };
    showAuthErr(msgs[e.code] || e.message);
  }
  setBtnLoad("btn-reg", false, "Crear cuenta →");
}

async function doReset() {
  const cedula = document.getElementById("reset-email").value.trim();
  if (!cedula) { showAuthErr("Ingresa tu número de cédula"); return; }
  const email = cedula + "@mroh.app";
  setBtnLoad("btn-reset", true, "Enviar enlace →");
  try {
    await auth.sendPasswordResetEmail(email);
    showAuthOk("✓ Enlace enviado. Revisa tu correo.");
  } catch(e) {
    showAuthErr("No se pudo enviar el enlace. Verifica el correo.");
  }
  setBtnLoad("btn-reset", false, "Enviar enlace →");
}

async function doLogout() {
  if (!confirm("¿Cerrar sesión?")) return;
  if (unsubUserProfile) { unsubUserProfile(); unsubUserProfile = null; }
  await auth.signOut();
}

// INIT
function init() {
  const sel = document.getElementById("inp-partido");
  FECHAS.forEach(f => {
    const opt = document.createElement("option"); opt.disabled=true; opt.text="── "+f+" ──"; sel.add(opt);
    PARTIDOS.filter(p=>p.fecha===f).forEach(p => {
      const o = document.createElement("option"); o.value=p.id; o.text=p.local+" vs "+p.visitante+" — "+p.grupo; sel.add(o);
    });
  });
  EQUIPOS.forEach(e => { const o=document.createElement("option"); o.value=e; document.getElementById("lista-equipos").appendChild(o); });
  const ff = document.getElementById("fil-fecha");
  FECHAS.forEach(f => { const o=document.createElement("option"); o.value=f; o.text=f; ff.appendChild(o); });
  const fg = document.getElementById("fil-grupo-p");
  GRUPOS.forEach(g => { const o=document.createElement("option"); o.value=g; o.text=g; fg.appendChild(o); });
  renderPartidos();
}

// TABS
function showTab(id, btn) {
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("tab-"+id).classList.add("active");
  btn.classList.add("active");
  if(id==="apuestas")  renderApuestas();
  if(id==="tabla")     renderTabla();
  if(id==="resultados")renderResultados();
  if(id==="admin"){renderUsuarios();cargarLinkUnico();}
  if(id==="partidos")  renderPartidos();
  if(id==="admin")     { adminSubTab('usuarios'); }
  if(id==="dieciseis") { renderDieciseis(); }
}

function updateTipo() {
  const t = document.getElementById("inp-tipo").value;
  const esFinal = ["campeon","subcampeon","tercer_puesto"].includes(t);
  const secPartido = document.getElementById("sec-partido");
  const secGoles   = document.getElementById("sec-goles");
  const wrapGrupo  = document.getElementById("wrap-grupo");
  if (secPartido) secPartido.style.display = esFinal?"none":"block";
  if (secGoles)   secGoles.style.display   = t==="grupo"?"block":"none";
  if (wrapGrupo)  wrapGrupo.style.display  = esFinal?"none":"block";
  document.getElementById("sec-campeon").style.display = esFinal?"block":"none";
  // Update label in campeon input
  const lbl = document.getElementById("lbl-campeon");
  if (lbl) {
    lbl.textContent = t==="campeon" ? "Equipo campeón" : t==="subcampeon" ? "Equipo subcampeón" : "Equipo tercer puesto";
  }
  const inp = document.getElementById("inp-campeon");
  if (inp) {
    inp.placeholder = t==="campeon" ? "Ej: Argentina" : t==="subcampeon" ? "Ej: Francia" : "Ej: Brasil";
  }
}

function autoFill() {
  const pid = document.getElementById("inp-partido").value;
  if(!pid) return;
  const p = PARTIDOS.find(x=>x.id===pid); if(!p) return;
  document.getElementById("inp-local").value     = p.local;
  document.getElementById("inp-visitante").value = p.visitante;
  document.getElementById("inp-grupo").value     = p.grupo;
  document.getElementById("lbl-local").textContent = p.local;
  document.getElementById("lbl-visit").textContent = p.visitante;
  // Mostrar campos de desempate si el admin los configuró
  renderDesempateApuesta(pid, p.local, p.visitante);
}

function renderDesempateApuesta(pid, local, visitante) {
  const cfg = configPartidos[pid] || {};
  const container = document.getElementById('sec-desempate');
  if (!container) return;
  let html = '';
  if (cfg.tarjetas) {
    html += `<div style="margin-top:14px;padding:12px 14px;background:var(--oro-light);border:1px solid #f0d89a;border-radius:var(--radius);">
      <div style="font-size:12px;font-weight:700;color:var(--oro);margin-bottom:10px;">🟨 Desempate — Tarjetas amarillas</div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:4px;">${local}</div>
          <input type="number" id="inp-tarjetas-local" min="0" max="20" value="0"
            style="width:64px;text-align:center;font-size:20px;font-weight:700;padding:8px 4px;border:1px solid var(--border);border-radius:8px;font-family:Inter,sans-serif;background:var(--bg);"/>
        </div>
        <div style="font-size:12px;color:var(--muted);font-weight:700;">VS</div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:4px;">${visitante}</div>
          <input type="number" id="inp-tarjetas-visit" min="0" max="20" value="0"
            style="width:64px;text-align:center;font-size:20px;font-weight:700;padding:8px 4px;border:1px solid var(--border);border-radius:8px;font-family:Inter,sans-serif;background:var(--bg);"/>
        </div>
      </div>
    </div>`;
  }
  if (cfg.esquinas) {
    html += `<div style="margin-top:10px;padding:12px 14px;background:#e8eef7;border:1px solid #c5d4e8;border-radius:var(--radius);">
      <div style="font-size:12px;font-weight:700;color:var(--verde);margin-bottom:10px;">🔄 Desempate — Tiros de esquina</div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:4px;">${local}</div>
          <input type="number" id="inp-esquinas-local" min="0" max="30" value="0"
            style="width:64px;text-align:center;font-size:20px;font-weight:700;padding:8px 4px;border:1px solid var(--border);border-radius:8px;font-family:Inter,sans-serif;background:var(--bg);"/>
        </div>
        <div style="font-size:12px;color:var(--muted);font-weight:700;">VS</div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:4px;">${visitante}</div>
          <input type="number" id="inp-esquinas-visit" min="0" max="30" value="0"
            style="width:64px;text-align:center;font-size:20px;font-weight:700;padding:8px 4px;border:1px solid var(--border);border-radius:8px;font-family:Inter,sans-serif;background:var(--bg);"/>
        </div>
      </div>
    </div>`;
  }
  container.innerHTML = html;
}

// REGISTRAR APUESTA
async function registrar() {
  const tipo = document.getElementById("inp-tipo").value;
  // Verificar si el usuario está eliminado
  if (currentUser.eliminado) {
    toast('⛔ Fuiste eliminado en la fase de grupos');
    return;
  }
  // Verificar si el partido está abierto
  if (tipo !== 'campeon') {
    const pid = document.getElementById("inp-partido").value;
    if (pid && !estaAbierto(pid, tipo)) {
      toast("⛔ Las apuestas para este partido están cerradas");
      return;
    }
  }
  const a = {
    numId: nextId++,
    uid:   currentUser.uid,
    nombre:currentUser.nombre,
    tipo,
    ts: new Date().toLocaleString("es-CO"),
    creado: firebase.firestore.FieldValue.serverTimestamp()
  };
  if (["campeon","subcampeon","tercer_puesto","goleador","valla"].includes(tipo)) {
    if ((tipo==="goleador"||tipo==="valla") && !estaAbiertoEspecial(tipo)) {
      toast("⛔ Las apuestas para " + tipo + " están cerradas");
      return;
    }
    const labelMap = {campeon:"campeón",subcampeon:"subcampeón",tercer_puesto:"tercer puesto",goleador:"goleador",valla:"valla menos vencida"};
    const c = document.getElementById("inp-campeon").value.trim();
    if (!c) { toast("⚠ Ingresa el " + (labelMap[tipo]||tipo)); return; }
    a.equipoElegido = c;
    if (tipo === "campeon")       a.campeon      = c;
    if (tipo === "subcampeon")    a.subcampeon   = c;
    if (tipo === "tercer_puesto") a.tercerPuesto = c;
    if (tipo === "goleador") {
      a.goleador = c;
      a.golesGoleador = parseInt(document.getElementById('inp-num-especial')?.value) || 0;
    }
    if (tipo === "valla") {
      a.valla = c;
      a.golesValla = parseInt(document.getElementById('inp-num-especial')?.value) || 0;
    }
  } else {
    const local     = document.getElementById("inp-local").value.trim();
    const visitante = document.getElementById("inp-visitante").value.trim();
    const pid       = document.getElementById("inp-partido").value;
    if (!local||!visitante) { toast("⚠ Ingresa los equipos"); return; }
    a.local      = local;
    a.visitante  = visitante;
    a.partidoId  = pid || null;
    a.grupo      = document.getElementById("inp-grupo").value || "";
    if (tipo === "grupo") {
      a.golLocal     = parseInt(document.getElementById("inp-gl").value)||0;
      a.golVisitante = parseInt(document.getElementById("inp-gv").value)||0;
      // Guardar desempate si aplica
      const cfgP = configPartidos[pid] || {};
      if (cfgP.tarjetas) {
        a.tarjetasLocal    = parseInt(document.getElementById("inp-tarjetas-local")?.value)||0;
        a.tarjetasVisitante= parseInt(document.getElementById("inp-tarjetas-visit")?.value)||0;
      }
      if (cfgP.esquinas) {
        a.esquinasLocal    = parseInt(document.getElementById("inp-esquinas-local")?.value)||0;
        a.esquinasVisitante= parseInt(document.getElementById("inp-esquinas-visit")?.value)||0;
      }
    }
  }
  try {
    // Verificar si ya existe una apuesta para este partido+usuario
    if (a.partidoId && a.tipo !== 'campeon' && a.tipo !== 'subcampeon' &&
        a.tipo !== 'tercer_puesto' && a.tipo !== 'goleador' && a.tipo !== 'valla') {
      const existing = apuestas.find(x => x.uid === currentUser.uid && x.partidoId === a.partidoId);
      if (existing) {
        // Actualizar apuesta existente
        await db.collection("apuestas").doc(existing.id).update({
          golLocal: a.golLocal, golVisitante: a.golVisitante,
          tarjetasLocal: a.tarjetasLocal, tarjetasVisitante: a.tarjetasVisitante,
          esquinasLocal: a.esquinasLocal, esquinasVisitante: a.esquinasVisitante,
          ts: new Date().toLocaleString("es-CO")
        });
        toast('✓ Desafío actualizado');
        cerrarModalApuesta();
        return;
      }
    }
    // También verificar duplicados para campeón/subcampeón/etc
    if (['campeon','subcampeon','tercer_puesto','goleador','valla'].includes(a.tipo)) {
      const existing = apuestas.find(x => x.uid === currentUser.uid && x.tipo === a.tipo);
      if (existing) {
        // Solo actualizar los campos que tienen valor (evitar undefined)
        const updateData = { equipoElegido: a.equipoElegido || '', ts: new Date().toLocaleString("es-CO") };
        if (a.campeon      !== undefined) updateData.campeon      = a.campeon;
        if (a.subcampeon   !== undefined) updateData.subcampeon   = a.subcampeon;
        if (a.tercerPuesto !== undefined) updateData.tercerPuesto = a.tercerPuesto;
        if (a.goleador     !== undefined) updateData.goleador     = a.goleador;
        if (a.valla        !== undefined) updateData.valla        = a.valla;
        if (a.golesGoleador!== undefined) updateData.golesGoleador= a.golesGoleador;
        if (a.golesValla   !== undefined) updateData.golesValla   = a.golesValla;
        await db.collection("apuestas").doc(existing.id).update(updateData);
        toast('✓ Desafío actualizado');
        return;
      }
    }
    // Limpiar campos undefined antes de guardar
    const aClean = {};
    Object.keys(a).forEach(k => { if (a[k] !== undefined) aClean[k] = a[k]; });
    await db.collection("apuestas").add(aClean);
    toast(textos.toast_apuesta_ok || '✓ Desafío registrado');
    document.getElementById("inp-partido").value  = "";
    document.getElementById("inp-local").value    = "";
    document.getElementById("inp-visitante").value= "";
    document.getElementById("inp-grupo").value    = "";
    document.getElementById("inp-campeon").value  = "";
    document.getElementById("inp-gl").value = 1;
    document.getElementById("inp-gv").value = 0;
    const secDesemp = document.getElementById('sec-desempate');
    if (secDesemp) secDesemp.innerHTML = '';
  } catch(e) { toast("❌ Error al guardar: "+e.message); }
}

// PUNTOS
function calcPuntos(a) {
  // Campeón, subcampeón, tercer puesto — se calculan contra resultados especiales
  if (a.tipo==="campeon") {
    const r = resultados["campeon"];
    if (!r || !a.campeon) return 0;
    return a.campeon === r.equipo ? getPts("campeon") : 0;
  }
  if (a.tipo==="subcampeon") {
    const r = resultados["subcampeon"];
    if (!r || !a.subcampeon) return 0;
    return a.subcampeon === r.equipo ? getPts("subcampeon") : 0;
  }
  if (a.tipo==="tercer_puesto") {
    const r = resultados["tercer_puesto"];
    if (!r || !a.tercerPuesto) return 0;
    return a.tercerPuesto === r.equipo ? getPts("tercer_puesto") : 0;
  }
  if (a.tipo==="goleador") {
    const r = resultados["goleador"];
    if (!r || !a.goleador) return 0;
    return a.goleador.toLowerCase() === r.jugador.toLowerCase() ? getPts("goleador") : 0;
  }
  if (a.tipo==="valla") {
    const r = resultados["valla"];
    if (!r || !a.valla) return 0;
    return a.valla.toLowerCase() === r.equipo.toLowerCase() ? getPts("valla") : 0;
  }
  if (!a.partidoId || !resultados[a.partidoId]) return 0;
  const r  = resultados[a.partidoId];
  const gl = Number(a.golLocal)||0, gv = Number(a.golVisitante)||0;
  if (gl===r.local && gv===r.visitante) return getPts("resultado_exacto");
  if (r.local===r.visitante && gl===gv)  return getPts("empate_correcto");
  if (Math.sign(gl-gv)===Math.sign(r.local-r.visitante)) return getPts("ganador_correcto");
  return 0;
}

// RENDER PARTIDOS
function renderPartidos() {
  const fF = document.getElementById("fil-fecha").value;
  const fG = document.getElementById("fil-grupo-p").value;
  const lista = PARTIDOS.filter(p=>(!fF||p.fecha===fF)&&(!fG||p.grupo===fG));
  const fechas = sortFechas([...new Set(lista.map(p=>p.fecha))]);
  document.getElementById("partidos-container").innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div class="fecha-bloque">
      <div class="fecha-header"><div class="fecha-badge">📅 ${f}</div><div class="fecha-line"></div><div style="font-size:12px;color:var(--muted);white-space:nowrap;">${ps.length} partido${ps.length!==1?"s":""}</div></div>
      <div class="partidos-grid">${ps.map(p => {
        const res = resultados[p.id];
        const abierto = estaAbierto(p.id, 'grupo');
        const tr = tiempoRestante(p.id, 'grupo');
        let cierreBadge = '';
        if (tr === 'cerrado') cierreBadge = '<span class="cierre-badge cierre-cerrado">⛔ Cerrado</span>';
        else if (tr && parseInt(tr) <= 24) cierreBadge = `<span class="cierre-badge cierre-pronto">⏳ Cierra en ${tr}</span>`;
        else if (tr) cierreBadge = `<span class="cierre-badge cierre-abierto">✅ Abierto</span>`;
        return `<div class="partido-card${res?" con-resultado":""}${!abierto?" cerrado":""}" onclick="${abierto?"preselectPartido('"+p.id+"')":"void(0)"}">
          <div class="p-grupo">${p.grupo} ${cierreBadge}</div>
          <div class="p-match">⚽ ${p.local} vs ${p.visitante}</div>
          <div class="p-sede">📍 ${p.sede}</div>
          ${res?`<div class="p-res">${res.local} – ${res.visitante}</div>`:""}
        </div>`;
      }).join("")}</div></div>`;
  }).join("");
}

function preselectPartido(pid) {
  abrirApuestaPartido(pid);
}

// RENDER APUESTAS
function renderDieciseis() {
  const container = document.getElementById('partidos-16vos-container');
  if (!container) return;
  const fasesElim = ['16avos','8avos','Cuartos','Semifinales','Final'];
  const partidos16 = PARTIDOS.filter(p => fasesElim.includes(p.grupo));
  if (!partidos16.length) {
    container.innerHTML = '<div style="color:var(--muted);padding:12px 0;">Sin partidos cargados.</div>';
    return;
  }
  const porFase = {};
  fasesElim.forEach(f => porFase[f] = []);
  partidos16.forEach(p => { if (porFase[p.grupo]) porFase[p.grupo].push(p); });
  const esAdmin = currentUser && currentUser.rol === 'admin';
  let html = '';
  fasesElim.forEach(fase => {
    const ps = porFase[fase];
    if (!ps || !ps.length) return;
    html += '<div style="margin-bottom:20px;">';
    html += '<div style="font-family:Bebas Neue,sans-serif;font-size:18px;color:var(--verde);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid var(--border);">&#9889; ' + fase + '</div>';
    html += '<div class="partidos-grid">';
    ps.forEach(p => {
      const esPorConfirmar = p.local === 'Por confirmar';
      const abierto = !esPorConfirmar && estaAbierto(p.id, 'elim');
      const tiempo  = !esPorConfirmar && tiempoRestante(p.id, 'elim');
      const res = resultados[p.id];
      const miApuesta = !esPorConfirmar && apuestas.find(a => a.partidoId === p.id);
      let badge = '';
      if (esPorConfirmar) {
        badge = '<span style="background:#f3f4f6;color:#6b7280;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">&#9203; Por confirmar</span>';
      } else if (abierto) {
        badge = tiempo
          ? '<span style="background:#fef3c7;color:#92400e;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">&#9203; ' + tiempo + '</span>'
          : '<span style="background:#d1fae5;color:#065f46;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">&#9989; ABIERTO</span>';
      } else {
        badge = '<span style="background:#fee2e2;color:#991b1b;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">&#128683; CERRADO</span>';
      }
      const claseRes = res ? ' con-resultado' : '';
      const onclickAttr = (!esPorConfirmar && abierto) ? 'onclick="abrirApuestaPartido(\"' + p.id + '\")"' : '';
      html += '<div class="partido-card' + claseRes + '" ' + onclickAttr + ' style="' + (esPorConfirmar?'opacity:0.6;':'') + '">';
      html += '<div class="p-grupo" style="display:flex;justify-content:space-between;align-items:center;">';
      html += '<span>' + fase + ' &middot; ' + p.id + '</span>' + badge + '</div>';
      // Admin puede editar nombre del partido
      if (esAdmin && esPorConfirmar) {
        html += '<div style="margin-top:6px;display:flex;gap:4px;">';
        html += '<input id="eq-local-' + p.id + '" placeholder="Local" list="lista-equipos" style="flex:1;padding:4px 6px;font-size:11px;border:1px solid var(--border);border-radius:6px;"/>';
        html += '<span style="color:var(--muted);padding:4px;">vs</span>';
        html += '<input id="eq-visit-' + p.id + '" placeholder="Visitante" list="lista-equipos" style="flex:1;padding:4px 6px;font-size:11px;border:1px solid var(--border);border-radius:6px;"/>';
        html += '<button onclick="confirmarPartido(&quot;' + p.id + '&quot;,&quot;' + fase + '&quot;)" style="padding:4px 8px;font-size:11px;background:var(--verde);color:white;border:none;border-radius:6px;cursor:pointer;">&#10003;</button>';
        html += '</div>';
      } else {
        html += '<div class="p-match">' + p.local + ' vs ' + p.visitante + '</div>';
      }
      if (p.sede && p.sede !== 'Por confirmar') html += '<div class="p-sede">&#128205; ' + p.sede + '</div>';
      if (res) html += '<div class="p-res">' + (res.local !== undefined ? res.local : '?') + ' - ' + (res.visitante !== undefined ? res.visitante : '?') + '</div>';
      if (miApuesta) html += '<div style="font-size:11px;color:var(--verde);margin-top:4px;">&#10003; Apostado: ' + miApuesta.golLocal + '-' + miApuesta.golVisitante + '</div>';
      html += '</div>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;
}

async function confirmarPartido(pid, fase) {
  const local    = document.getElementById('eq-local-' + pid)?.value.trim();
  const visitante = document.getElementById('eq-visit-' + pid)?.value.trim();
  if (!local || !visitante) { toast('Ingresa ambos equipos'); return; }
  // Actualizar en el array PARTIDOS en memoria
  const p = PARTIDOS.find(x => x.id === pid);
  if (p) { p.local = local; p.visitante = visitante; }
  // Guardar en Firestore para persistir
  await db.collection('config').doc('partidos-elim').set({ [pid]: { local, visitante } }, { merge: true });
  toast('✓ ' + pid + ': ' + local + ' vs ' + visitante);
  renderDieciseis();
}

async function cargarPartidosElim() {
  try {
    const snap = await db.collection('config').doc('partidos-elim').get();
    if (!snap.exists) return;
    const data = snap.data();
    Object.entries(data).forEach(([pid, equipos]) => {
      const p = PARTIDOS.find(x => x.id === pid);
      if (p && equipos.local && equipos.local !== 'Por confirmar') {
        p.local = equipos.local;
        p.visitante = equipos.visitante;
      }
    });
  } catch(e) { console.warn('Error cargando partidos elim:', e.message); }
}

function renderApuestasPorPartido() {
  const container = document.getElementById('apuestas-por-partido');
  if (!container) return;
  const EXCL = new Set(['A1','A2','B1','D1','B2','C1','C2','D2','E1','F1','E2','F2','H1','G1','H2','G2','I1','I2','J1','J2','K1','L1','L2','K2']);
  const conteo = {};
  apuestas.forEach(a => { if (a.tipo==='grupo' && a.partidoId && !EXCL.has(a.partidoId)) conteo[a.partidoId] = (conteo[a.partidoId]||0)+1; });
  const partidos = PARTIDOS.filter(p => !EXCL.has(p.id) && p.grupo !== '16avos');
  if (!partidos.length) { container.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:8px 0;">Sin datos</div>'; return; }
  const maxVal = Math.max(...partidos.map(p => conteo[p.id]||0), 1);
  container.innerHTML = partidos.map(p => {
    const n = conteo[p.id]||0;
    const pct = Math.round((n/maxVal)*100);
    const color = n===0?'var(--border)':n>=maxVal*0.8?'var(--verde)':n>=maxVal*0.4?'var(--oro)':'#e57373';
    return '<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid var(--border);">'+
      '<div style="font-size:11px;font-weight:700;color:var(--muted);min-width:28px;">'+p.id+'</div>'+
      '<div style="flex:1;min-width:0;"><div style="font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+p.local+' vs '+p.visitante+'</div>'+
      '<div style="margin-top:3px;background:var(--border);border-radius:4px;height:6px;overflow:hidden;"><div style="width:'+pct+'%;height:100%;background:'+color+';border-radius:4px;"></div></div></div>'+
      '<div style="font-family:Bebas Neue,sans-serif;font-size:20px;color:'+color+';min-width:36px;text-align:right;">'+n+'</div></div>';
  }).join('');
}

function renderApuestas() {
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  const grupos   = [...new Set(apuestas.filter(a=>a.grupo).map(a=>a.grupo))];
  const filP = document.getElementById("fil-persona");
  const filG = document.getElementById("fil-grupo-a");
  const filPart = document.getElementById("fil-partido-a");
  const curP = filP.value, curG = filG.value, curPart = filPart ? filPart.value : '';
  filP.innerHTML = '<option value="">Todos los participantes</option>'+personas.map(p=>`<option${p===curP?" selected":""}>${p}</option>`).join("");
  filG.innerHTML = '<option value="">Todos los grupos</option>'+grupos.map(g=>`<option${g===curG?" selected":""}>${g}</option>`).join("");
  // Llenar filtro de partidos si es admin
  if (filPart && currentUser.rol === 'admin') {
    const partConApuestas = [...new Set(apuestas.filter(a=>a.partidoId).map(a=>a.partidoId))];
    const curVal = filPart.value;
    filPart.innerHTML = '<option value="">Todos los partidos</option>' +
      partConApuestas.map(pid => {
        const p = PARTIDOS.find(x=>x.id===pid);
        const label = p ? `${p.local} vs ${p.visitante}` : pid;
        return `<option value="${pid}"${pid===curVal?' selected':''}>${label}</option>`;
      }).join("");
  }
  const fT=document.getElementById("fil-tipo").value, fP=filP.value, fG2=filG.value;
  const fPart = filPart ? filPart.value : '';
  // Si ocultarApuestas está activo, usuario normal solo ve sus propias apuestas
  const soloMias = configGlobal.ocultarApuestas && currentUser.rol !== 'admin';
  let lista = apuestas.filter(a=>
    (!soloMias || a.uid === currentUser.uid) &&
    (!fT||a.tipo===fT) &&
    (!fP||a.nombre===fP) &&
    (!fG2||a.grupo===fG2) &&
    (!fPart||a.partidoId===fPart)
  );
  const container = document.getElementById("lista-apuestas");
  if (!lista.length) { container.innerHTML='<div class="empty"><div class="empty-ico">📭</div>No hay apuestas que mostrar</div>'; return; }
  container.innerHTML = lista.map(a => {
    const pts = calcPuntos(a);
    const ini = a.nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
    const badge = `<span class="badge badge-${a.tipo==="campeon"?"campeon":a.tipo}">${a.tipo==="campeon"?"🏆 Campeón":a.tipo==="grupo"?"Grupos":"Eliminatoria"}</span>`;
    const ptsStr = pts>0 ? `<span class="pts-badge">+${pts} pts</span>` : "";
    let detalle="", score="";
    if(a.tipo==="campeon")       detalle="🏆 Campeón: "+(a.campeon||a.equipoElegido||"");
    else if(a.tipo==="subcampeon")   detalle="🥈 Subcampeón: "+(a.subcampeon||a.equipoElegido||"");
    else if(a.tipo==="tercer_puesto")detalle="🥉 3er Puesto: "+(a.tercerPuesto||a.equipoElegido||"");
    else if(a.tipo==="goleador")     detalle="⚽ Goleador: "+(a.goleador||a.equipoElegido||"")+(a.golesGoleador!==undefined?" · "+a.golesGoleador+" goles":"");
    else if(a.tipo==="valla")        detalle="🧤 Valla: "+(a.valla||a.equipoElegido||"")+(a.golesValla!==undefined?" · "+a.golesValla+" goles en contra":"");
    else { detalle=a.local+" vs "+a.visitante+(a.grupo?" ("+a.grupo+")":""); if(a.tipo==="grupo") score=a.golLocal+"–"+a.golVisitante; }
    // Mostrar desempate solo para las propias apuestas
    const esMia = a.uid === currentUser.uid;
    let desempateHtml = '';
    if (esMia && a.tipo==="grupo") {
      if (a.tarjetasLocal !== undefined) {
        desempateHtml += `<span style="font-size:11px;background:#fdf3dc;color:#c8972b;padding:2px 7px;border-radius:8px;margin-right:4px;">🟨 ${a.tarjetasLocal}–${a.tarjetasVisitante}</span>`;
      }
      if (a.esquinasLocal !== undefined) {
        desempateHtml += `<span style="font-size:11px;background:#e8eef7;color:var(--verde);padding:2px 7px;border-radius:8px;">🔄 ${a.esquinasLocal}–${a.esquinasVisitante}</span>`;
      }
    }
    return `<div class="apuesta-card">
      <div class="a-avatar">${ini}</div>
      <div class="a-info">
        <div class="a-nombre">${a.nombre} ${badge} ${ptsStr}</div>
        <div class="a-detalle">${detalle}</div>
        ${desempateHtml ? `<div style="margin-top:4px;">${desempateHtml}</div>` : ''}
        <div style="font-size:11px;color:var(--muted);margin-top:2px;">${a.ts}</div>
      </div>
      ${score?`<div class="a-score">${score}</div>`:""}
      <button class="btn btn-danger btn-sm" onclick="borrarApuesta('${a.id}')">🗑</button>
    </div>`;
  }).join("");
}

async function borrarApuesta(id) {
  if (!confirm("¿Eliminar esta apuesta?")) return;
  try {
    await db.collection("apuestas").doc(id).delete();
    toast("Apuesta eliminada");
  } catch(e) { toast("Error al eliminar"); }
}

// RENDER RESULTADOS
function renderResultados() {
  const pIds  = [...new Set(apuestas.filter(a=>a.partidoId).map(a=>a.partidoId))];
  const lista = PARTIDOS.filter(p=>pIds.includes(p.id)||resultados[p.id]);
  const container = document.getElementById("lista-resultados");

  // Sección especial para campeón, subcampeón y tercer puesto
  const tieneEspeciales = apuestas.some(a=>['campeon','subcampeon','tercer_puesto'].includes(a.tipo));
  let especialesHtml = '';
  if (tieneEspeciales) {
    const especiales = [
      {id:'campeon',      label:'Campeón',            icon:'🏆', field:'campeon'},
      {id:'subcampeon',   label:'Subcampeón',          icon:'🥈', field:'subcampeon'},
      {id:'tercer_puesto',label:'Tercer puesto',       icon:'🥉', field:'tercerPuesto'},
      {id:'goleador',     label:'Goleador fase grupos',icon:'⚽', field:'goleador', esJugador:true},
      {id:'valla',        label:'Valla menos vencida', icon:'🧤', field:'valla'},
    ];
    especialesHtml = `<div class="card" style="margin-bottom:14px;">
      <div class="card-title" style="margin-bottom:12px;">🏆 Resultados finales del mundial</div>
      ${especiales.map(e => {
        const r = resultados[e.id];
        const n = apuestas.filter(a=>a.tipo===e.id).length;
        if (!n) return '';
        if (r) return `<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
          <span style="font-size:20px;">${e.icon}</span>
          <div style="flex:1;"><div style="font-weight:600;font-size:14px;">${e.label}</div>
          <div style="font-size:13px;color:var(--verde);font-weight:600;">${r.equipo}</div>
          <div style="font-size:11px;color:var(--muted);">${n} apuesta(s)</div></div>
          <button class="btn btn-outline btn-sm" onclick="borrarResultadoEspecial('${e.id}')">✕</button>
        </div>`;
        return `<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
          <span style="font-size:20px;">${e.icon}</span>
          <div style="flex:1;font-weight:600;">${e.label}</div>
          <input type="text" id="res-${e.id}" placeholder="Equipo ganador" list="lista-equipos"
            style="flex:1;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:13px;"/>
          <button class="btn btn-primary btn-sm" onclick="guardarResultadoEspecial('${e.id}')">Guardar</button>
        </div>`;
      }).join('')}
    </div>`;
  }

  if (!lista.length && !especialesHtml) { container.innerHTML='<div class="empty"><div class="empty-ico">⏳</div>Registra apuestas para ver partidos aquí</div>'; return; }
  container.innerHTML = especialesHtml;
  if (!lista.length) return;
  const fechas = sortFechas([...new Set(lista.map(p=>p.fecha))]);
  container.innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div class="fecha-bloque">
      <div class="fecha-header"><div class="fecha-badge">📅 ${f}</div><div class="fecha-line"></div></div>
      ${ps.map(p => {
        const r = resultados[p.id];
        const n = apuestas.filter(a=>a.partidoId===p.id).length;
        const cfg = configPartidos[p.id] || {};
        const isAdmin = currentUser && currentUser.rol === 'admin';
        if(r) return `<div class="res-card">
          <div class="res-match">${p.grupo} · ${p.local} vs ${p.visitante}</div>
          <div class="res-form"><span style="font-weight:600;">${p.local}</span><div class="res-done">${r.local} – ${r.visitante}</div><span style="font-weight:600;">${p.visitante}</span>
          ${isAdmin ? `<button class="btn btn-outline btn-sm" onclick="borrarResultado('${p.id}')" style="margin-left:auto;">✕</button>` : ''}</div>
          ${isAdmin && cfg.tarjetas ? `<div style="display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:600;color:var(--muted);">🟨 Tarjetas:</span>
            <input type="number" id="r-tl-${p.id}" min="0" max="20" value="${r.tarjetasLocal??0}" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
            <span style="font-size:12px;color:var(--muted);">vs</span>
            <input type="number" id="r-tv-${p.id}" min="0" max="20" value="${r.tarjetasVisitante??0}" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
            <button class="btn btn-sm btn-primary" onclick="guardarDesempate('${p.id}')" style="padding:4px 10px;font-size:11px;">Guardar</button>
          </div>` : (!isAdmin && cfg.tarjetas ? `<div style="font-size:12px;color:var(--muted);margin-top:4px;">🟨 Tarjetas: ${r.tarjetasLocal||0}–${r.tarjetasVisitante||0}</div>` : '')}
          ${isAdmin && cfg.esquinas ? `<div style="display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:600;color:var(--muted);">🔄 Esquinas:</span>
            <input type="number" id="r-el-${p.id}" min="0" max="30" value="${r.esquinasLocal??0}" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
            <span style="font-size:12px;color:var(--muted);">vs</span>
            <input type="number" id="r-ev-${p.id}" min="0" max="30" value="${r.esquinasVisitante??0}" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
            <button class="btn btn-sm btn-primary" onclick="guardarDesempate('${p.id}')" style="padding:4px 10px;font-size:11px;">Guardar</button>
          </div>` : (!isAdmin && cfg.esquinas ? `<div style="font-size:12px;color:var(--muted);margin-top:2px;">🔄 Esquinas: ${r.esquinasLocal||0}–${r.esquinasVisitante||0}</div>` : '')}
          <div style="font-size:12px;color:var(--muted);margin-top:6px;">${n} apuesta(s)</div></div>`;
        return `<div class="res-card">
          <div class="res-match">${p.grupo} · ${p.local} vs ${p.visitante}</div>
          ${isAdmin ? `<div class="res-form">
            <span style="font-weight:600;font-size:13px;">${p.local}</span>
            <input type="number" id="r-l-${p.id}" min="0" max="20" value="0"/>
            <span style="color:var(--muted);">vs</span>
            <input type="number" id="r-v-${p.id}" min="0" max="20" value="0"/>
            <span style="font-weight:600;font-size:13px;">${p.visitante}</span>
            <button class="btn btn-primary btn-sm" onclick="guardarResultado('${p.id}')" style="margin-left:auto;">Guardar</button>
          </div>` : `<div class="res-form"><span style="font-weight:600;font-size:13px;">${p.local}</span><div style="color:var(--muted);margin:0 8px;">Sin resultado aún</div><span style="font-weight:600;font-size:13px;">${p.visitante}</span></div>`}
          ${cfg.tarjetas ? `<div style="display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:600;color:var(--muted);">🟨 Tarjetas:</span>
            <input type="number" id="r-tl-${p.id}" min="0" max="20" value="0" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
            <span style="font-size:12px;color:var(--muted);">vs</span>
            <input type="number" id="r-tv-${p.id}" min="0" max="20" value="0" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
          </div>` : ''}
          ${cfg.esquinas ? `<div style="display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap;">
            <span style="font-size:12px;font-weight:600;color:var(--muted);">🔄 Esquinas:</span>
            <input type="number" id="r-el-${p.id}" min="0" max="30" value="0" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
            <span style="font-size:12px;color:var(--muted);">vs</span>
            <input type="number" id="r-ev-${p.id}" min="0" max="30" value="0" style="width:50px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
          </div>` : ''}
          <div style="font-size:12px;color:var(--muted);margin-top:6px;">${n} apuesta(s)</div></div>`;
      }).join("")}</div>`;
  }).join("");
}

async function guardarResultado(pid) {
  const l = parseInt(document.getElementById("r-l-"+pid).value)||0;
  const v = parseInt(document.getElementById("r-v-"+pid).value)||0;
  const cfg = configPartidos[pid] || {};
  const res = {local:l, visitante:v, ts: firebase.firestore.FieldValue.serverTimestamp()};
  // Guardar tarjetas y esquinas si aplica
  if (cfg.tarjetas) {
    res.tarjetasLocal    = parseInt(document.getElementById("r-tl-"+pid)?.value)||0;
    res.tarjetasVisitante= parseInt(document.getElementById("r-tv-"+pid)?.value)||0;
  }
  if (cfg.esquinas) {
    res.esquinasLocal    = parseInt(document.getElementById("r-el-"+pid)?.value)||0;
    res.esquinasVisitante= parseInt(document.getElementById("r-ev-"+pid)?.value)||0;
  }
  resultados[pid] = res;
  // Guardar en Firestore
  await db.collection("resultados").doc(pid).set(res);
  // Actualizar puntos
  const afectadas = apuestas.filter(a=>a.partidoId===pid);
  const batch = db.batch();
  afectadas.forEach(a => {
    batch.update(db.collection("apuestas").doc(a.id), {puntos: calcPuntos(a)});
  });
  await batch.commit();
  toast(`✓ Resultado: ${l}–${v}`);
  renderResultados(); renderApuestas(); renderTabla(); renderPartidos();
}

async function borrarResultado(pid) {
  delete resultados[pid];
  await db.collection("resultados").doc(pid).delete();
  renderResultados(); renderApuestas(); renderTabla(); renderPartidos();
}

// Cargar resultados de Firestore al iniciar
async function cargarHorarios() {
  try {
    const snap = await db.collection('horarios').get();
    snap.docs.forEach(d => { _horariosPartidos[d.id] = d.data().horaInicio; });
  } catch(e) { console.warn('No se pudieron cargar horarios:', e.message); }
}

async function cargarResultados() {
  // Cargar todo en paralelo para mayor velocidad
  const [snapRes] = await Promise.all([
    db.collection("resultados").get(),
    cargarConfigPartidos(),
    cargarTextos(),
    cargarCriterios(),
    cargarHorarios()
  ]);
  snapRes.forEach(doc => { resultados[doc.id] = doc.data(); });
  // Estas dependen de datos cargados arriba
  await Promise.all([verificarEliminacion(), checkEliminadoActual()]);
  appReady = true;
  renderPartidos(); renderResultados();
}

// RENDER TABLA
async function renderTabla() {
  document.getElementById("st-total").textContent    = apuestas.length;
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  document.getElementById("st-partic").textContent   = personas.length;
  document.getElementById("st-partidos").textContent = new Set(apuestas.filter(a=>a.partidoId).map(a=>a.partidoId)).size;
  const elCon = document.getElementById("st-con-apuesta-tabla");
  if (elCon) { const EXCL=new Set(['A1','A2','B1','D1','B2','C1','C2','D2','E1','F1','E2','F2','H1','G1','H2','G2','I1','I2','J1','J2','K1','L1','L2','K2']); elCon.textContent = new Set(apuestas.filter(a=>a.uid&&a.tipo==='grupo'&&!EXCL.has(a.partidoId)).map(a=>a.uid)).size; }
  renderApuestasPorPartido();

  const container = document.getElementById("tabla-ranking");
  container.innerHTML = '<div class="empty" style="padding:24px">Cargando...</div>';

  // apuestas ya contiene todas (suscribirApuestas carga sin filtro)
  const esAdmin = currentUser.rol === 'admin';

  // Filtro por partido (solo admin)
  const filtroDiv = document.getElementById('filtro-tabla-partido');
  const selPartido = document.getElementById('sel-filtro-tabla-partido');
  if (filtroDiv) filtroDiv.style.display = esAdmin ? 'block' : 'none';
  if (esAdmin && selPartido) {
    // Llenar opciones con partidos que tienen resultado
    const partidosConRes = Object.keys(resultados).filter(pid => PARTIDOS.find(p=>p.id===pid));
    const valActual = selPartido.value;
    selPartido.innerHTML = '<option value="">🏆 Ranking general</option>' +
      partidosConRes.map(pid => {
        const p = PARTIDOS.find(x=>x.id===pid);
        const label = p ? `${p.local} vs ${p.visitante}` : pid;
        return `<option value="${pid}"${pid===valActual?' selected':''}>${label}</option>`;
      }).join('');
    if (valActual && partidosConRes.includes(valActual)) selPartido.value = valActual;
  }
  const filtroPartido = esAdmin && selPartido ? selPartido.value : '';
  let todosUsuarios = [];
  try {
    if (esAdmin) {
      await cargarUsuariosCache();
      todosUsuarios = _cachedUsuarios.map(u => ({uid: u.id || u.uid, ...u}));
      const total     = todosUsuarios.length;
      const invitados = todosUsuarios.filter(u => u.invitadoPor).length;
      const asociados = total - invitados;
      const stReg = document.getElementById('st-registrados');
      const stInv = document.getElementById('st-invitados');
      const stAso = document.getElementById('st-asociados');
      const stCon = document.getElementById('st-con-apuesta');
      if (stReg) stReg.textContent = total;
      if (stInv) stInv.textContent = invitados;
      if (stAso) stAso.textContent = asociados;
      document.getElementById("st-partic").textContent = total;
      if (stCon) { const conApuesta = new Set((_cachedApuestasAd||[]).map(a => a.uid)).size; stCon.textContent = conApuesta; }
    } else {
      // Usar cache de apuestas para tabla (cargado al abrir pestaña)
      const fuente = tablaApuestasCache.length > 0 ? tablaApuestasCache : apuestas;
      const vistos = new Map();
      fuente.forEach(a => {
        if (a.uid && a.nombre && !vistos.has(a.uid))
          vistos.set(a.uid, { uid: a.uid, nombre: a.nombre, rol: 'user' });
      });
      todosUsuarios = [...vistos.values()];
    }
  } catch(e) { console.error('Error cargando tabla:', e); }

  // Partido más cercano con desempate habilitado (tarjetas o esquinas)
  const partidosConDesempate = Object.entries(configPartidos)
    .filter(([,c]) => c.tarjetas || c.esquinas)
    .map(([id]) => id);
  const hayDesempate = partidosConDesempate.length > 0;
  // Ordenar por posición en PARTIDOS (orden cronológico del fixture)
  const partidoDesempate = hayDesempate
    ? partidosConDesempate.sort((a,b) => {
        const ia = PARTIDOS.findIndex(p=>p.id===a);
        const ib = PARTIDOS.findIndex(p=>p.id===b);
        return ia - ib;
      })[0]
    : null;

  // Construir ranking con todos los usuarios
  const ranking = todosUsuarios
    .filter(u => u.rol !== 'admin')
    .map(u => {
      // Si hay filtro de partido, solo contar puntos de ese partido
      const fuenteApuestas = esAdmin ? (_cachedApuestasAd || apuestas) : apuestas;
      const PARTIDOS_EXCLUIDOS = new Set(['A1','A2','B1','D1','B2','C1','C2','D2','E1','F1','E2','F2','H1','G1','H2','G2','I1','I2','J1','J2','K1','L1','L2','K2']);
      const bets = filtroPartido
        ? fuenteApuestas.filter(a => a.uid === u.uid && a.partidoId === filtroPartido && !PARTIDOS_EXCLUIDOS.has(a.partidoId))
        : fuenteApuestas.filter(a => a.uid === u.uid && !PARTIDOS_EXCLUIDOS.has(a.partidoId));
      const fases = filtroPartido ? {} : calcPuntosPorFase(bets);
      const total = bets.reduce((s,a) => s+calcPuntos(a), 0);
      const nombre = u.nombre || u.email;
      // Desempate por partido filtrado
      let desFiltro = { tarjetas: 0, esquinas: 0 };
      if (filtroPartido) {
        const apFiltro = bets[0];
        const resFiltro = resultados[filtroPartido] || {};
        const cfgFiltro = configPartidos[filtroPartido] || {};
        if (apFiltro && cfgFiltro.tarjetas && resFiltro.tarjetasLocal !== undefined) {
          if (Number(apFiltro.tarjetasLocal) === Number(resFiltro.tarjetasLocal) &&
              Number(apFiltro.tarjetasVisitante) === Number(resFiltro.tarjetasVisitante))
            desFiltro.tarjetas = 1;
        }
        if (apFiltro && cfgFiltro.esquinas && resFiltro.esquinasLocal !== undefined) {
          if (Number(apFiltro.esquinasLocal) === Number(resFiltro.esquinasLocal) &&
              Number(apFiltro.esquinasVisitante) === Number(resFiltro.esquinasVisitante))
            desFiltro.esquinas = 1;
        }
      }

      // Desempate: solo el partido más cercano con desempate activo
      const desempate = {};
      if (currentUser.rol === 'admin' && partidoDesempate) {
        const pid = partidoDesempate;
        const apuesta = bets.find(a => a.partidoId === pid);
        const p = PARTIDOS.find(x => x.id === pid);
        const label = p ? `${p.local} vs ${p.visitante}` : pid;
        const cfg = configPartidos[pid] || {};
        desempate[pid] = { label, tarjetas: cfg.tarjetas, esquinas: cfg.esquinas,
          tl: apuesta?.tarjetasLocal, tv: apuesta?.tarjetasVisitante,
          el: apuesta?.esquinasLocal, ev: apuesta?.esquinasVisitante };
      }

      return { nombre, pts: total, count: bets.length, fases, desempate,
               ini: nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(),
               desFiltroTarjetas: desFiltro.tarjetas, desFiltroEsquinas: desFiltro.esquinas };
    })
    .sort((a,b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (filtroPartido) {
        if (b.desFiltroTarjetas !== a.desFiltroTarjetas) return b.desFiltroTarjetas - a.desFiltroTarjetas;
        if (b.desFiltroEsquinas !== a.desFiltroEsquinas) return b.desFiltroEsquinas - a.desFiltroEsquinas;
      }
      return b.count - a.count;
    });

  if (!ranking.length) { container.innerHTML='<div class="empty" style="padding:24px">Sin participantes aún</div>'; return; }
  const colors = ["var(--oro)","#adb5bd","#cd7f32"];
  container.innerHTML = ranking.map((r,i) => {
    const faseBadges = Object.entries(r.fases)
      .filter(([,v])=>v>0)
      .map(([k,v])=>{
        const labels = {grupos:'Grupos',octavos:'Octavos',cuartos:'Cuartos',semis:'Semis',final:'Final',campeon:'Campeón'};
        const icons  = {grupos:'⚽',octavos:'🔁',cuartos:'🏅',semis:'🌟',final:'🏆',campeon:'👑'};
        return `<span style="font-size:10px;background:var(--verde-light);color:var(--verde);padding:2px 7px;border-radius:8px;margin-right:3px;">${icons[k]||''} ${labels[k]||k}: <strong>${v}</strong></span>`;
      }).join('');

    // Badges de desempate — solo admin
    let desempateBadges = '';
    if (currentUser.rol === 'admin') {
      // Si hay filtro de partido activo, mostrar desempate de ese partido
      const pidsBadge = filtroPartido ? [filtroPartido] : Object.keys(r.desempate);
      pidsBadge.forEach(pid => {
        const cfg = configPartidos[pid] || {};
        const res = resultados[pid] || {};
        const apFiltro = apuestas.find(a => a.uid === (apuestas.find(x=>x.nombre===r.nombre)?.uid) && a.partidoId === pid);
        const d = r.desempate[pid] || {
          tarjetas: cfg.tarjetas, esquinas: cfg.esquinas,
          tl: apFiltro?.tarjetasLocal, tv: apFiltro?.tarjetasVisitante,
          el: apFiltro?.esquinasLocal, ev: apFiltro?.esquinasVisitante,
          label: (() => { const p=PARTIDOS.find(x=>x.id===pid); return p?`${p.local} vs ${p.visitante}`:pid; })()
        };
        if (d.tarjetas) {
          const tl = d.tl ?? '?', tv = d.tv ?? '?';
          const acerto = res.tarjetasLocal !== undefined && Number(d.tl) === Number(res.tarjetasLocal) && Number(d.tv) === Number(res.tarjetasVisitante);
          desempateBadges += `<span title="🟨 Tarjetas en ${d.label}" style="font-size:10px;background:${acerto?'#d4edd9':'#fdf3dc'};color:${acerto?'#1a6b3c':'#c8972b'};padding:2px 7px;border-radius:8px;margin-right:3px;">🟨 ${tl}–${tv}</span>`;
        }
        if (d.esquinas) {
          const el = d.el ?? '?', ev = d.ev ?? '?';
          const acerto = res.esquinasLocal !== undefined && Number(d.el) === Number(res.esquinasLocal) && Number(d.ev) === Number(res.esquinasVisitante);
          desempateBadges += `<span title="🔄 Esquinas en ${d.label}" style="font-size:10px;background:${acerto?'#d4edd9':'#e8eef7'};color:${acerto?'#1a6b3c':'var(--verde)'};padding:2px 7px;border-radius:8px;margin-right:3px;">🔄 ${el}–${ev}</span>`;
        }
      });
    }

    return `<div class="rank-row" style="flex-wrap:wrap;">
      <div class="rank-pos${i<3?" top":""}">${i+1}</div>
      <div style="width:38px;height:38px;border-radius:50%;background:${colors[i]||"var(--verde)"};color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${r.ini}</div>
      <div class="rank-name" style="flex:1;">
        ${i===0?"🥇 ":i===1?"🥈 ":i===2?"🥉 ":""}${r.nombre}
        <div class="rank-sub">${r.count} apuesta${r.count!==1?"s":""}</div>
        ${faseBadges ? `<div style="margin-top:5px;flex-wrap:wrap;display:flex;gap:3px;">${faseBadges}</div>` : ''}
        ${desempateBadges ? `<div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:3px;">${desempateBadges}</div>` : ''}
      </div>
      <div><div class="rank-pts">${r.pts}</div><div class="pts-lbl">puntos</div></div>
    </div>`;
  }).join("");
}

// PUNTUACIÓN CONFIGURABLE
function renderPtsInfo() {
  const el = document.getElementById("pts-info-text");
  if(!el) return;
  el.innerHTML = criterios.map(c =>
    '<div class="pts-card">'
    + '<div class="pts-icon">'+c.icon+'</div>'
    + '<div class="pts-nombre">'+c.nombre+'</div>'
    + '<div class="pts-valor">'+c.pts+'</div>'
    + '<div class="pts-label">puntos</div>'
    + '</div>'
  ).join('');
}
function renderCriterios() {
  const c = document.getElementById("lista-criterios");
  const p = document.getElementById("pts-preview");
  if(!c) return;
  c.innerHTML = criterios.map((cr,i)=>{
    return `<div class="pts-config-row" style="flex-direction:column;align-items:stretch;gap:8px;padding:14px 0;">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <input type="text" value="${cr.icon}" maxlength="4"
          oninput="criterios[${i}].icon=this.value;saveCriterios();"
          style="width:46px;text-align:center;font-size:20px;padding:6px 2px;border:1px solid var(--border);border-radius:8px;background:var(--bg);"
          title="Icono (emoji)"/>
        <input type="text" value="${cr.nombre}"
          oninput="criterios[${i}].nombre=this.value;saveCriterios();"
          style="flex:1;min-width:130px;font-size:14px;font-weight:600;padding:8px 10px;border:1px solid var(--border);border-radius:8px;background:var(--bg);"
          placeholder="Nombre del criterio"/>
        <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
          <input type="number" value="${cr.pts}" min="0" max="99"
            oninput="criterios[${i}].pts=parseInt(this.value)||0;saveCriterios();"
            style="width:58px;text-align:center;font-size:18px;font-weight:700;padding:8px 4px;border:1px solid var(--border);border-radius:8px;font-family:Inter,sans-serif;background:var(--bg);"/>
          <span style="font-size:12px;color:var(--muted);">pts</span>
        </div>
        <button onclick="eliminarCriterio(${i})"
          style="background:none;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:14px;padding:6px 8px;color:var(--muted);"
          title="${cr.fijo?'Restablecer por defecto':'Eliminar'}">
          ${cr.fijo?'&#8635; Reset':'&#128465; Borrar'}
        </button>
      </div>
      <input type="text" value="${cr.desc||''}"
        oninput="criterios[${i}].desc=this.value;saveCriterios();"
        style="font-size:12px;color:var(--muted);padding:6px 10px;border:1px solid var(--border);border-radius:8px;background:var(--bg);width:100%;"
        placeholder="Descripcion (opcional)"/>
    </div>`;
  }).join("");
  if(p) p.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px;">${criterios.map(cr=>`
    <div style="background:var(--oro-light);border:1px solid #f0d89a;border-radius:8px;padding:10px 16px;text-align:center;min-width:100px;">
      <div style="font-size:24px;">${cr.icon}</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--verde);">${cr.pts}</div>
      <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;">${cr.nombre}</div>
    </div>`).join("")}</div>`;
}
async function agregarCriterio() {
  const nombre = document.getElementById("new-crit-nombre").value.trim();
  const pts    = parseInt(document.getElementById("new-crit-pts").value)||1;
  if(!nombre){toast("⚠ Escribe el nombre");return;}
  criterios.push({id:"custom_"+Date.now(),nombre,desc:"Criterio personalizado",icon:"⭐",pts,fijo:false});
  await saveCriterios();
  renderCriterios();
  document.getElementById("new-crit-nombre").value="";
  document.getElementById("new-crit-pts").value="2";
  toast("✓ Criterio agregado");
}
async function eliminarCriterio(i) {
  const cr = criterios[i];
  if (cr.fijo) {
    if (!confirm('Restablecer "' + cr.nombre + '" a los valores por defecto?')) return;
    const def = CRITERIOS_DEFAULT.find(d=>d.id===cr.id);
    if (def) { criterios[i] = {...def}; await saveCriterios(); renderCriterios(); toast('Criterio restablecido'); }
  } else {
    if (!confirm('Eliminar el criterio "' + cr.nombre + '"?')) return;
    criterios.splice(i, 1); await saveCriterios(); renderCriterios(); toast('Criterio eliminado');
  }
}

// ADMIN USUARIOS
function adminSubTab(tab) {
  ["usuarios","puntos","config","textos","apuestas-usr"].forEach(t => {
    document.getElementById("admin-panel-"+t).style.display = tab===t?"block":"none";
    const base = "flex:1;padding:10px 8px;font-size:11px;font-weight:600;border:none;background:none;cursor:pointer;white-space:nowrap;border-bottom:2px solid ";
    const el = document.getElementById("asubt-"+t);
    if(el) el.style.cssText = base+(tab===t?"var(--verde);color:var(--verde);":"transparent;color:var(--muted);");
  });
  if(tab==="puntos")  renderCriterios();
  if(tab==="config")  { renderConfigPartidos(); initConfigFiltros(); loadCierreGlobalUI(); }
  if(tab==="textos")  renderTextos();
  if(tab==="usuarios")    renderUsuarios();
  if(tab==="apuestas-usr") renderApuestasPorUsuario();
  if(tab==="dieciseis")    renderDieciseis();
  if(tab==="config")       cargarHorariosElim();
}

function initConfigFiltros() {
  const ff = document.getElementById('cfg-fil-fecha');
  const fg = document.getElementById('cfg-fil-grupo');
  if (ff && ff.options.length <= 1) {
    FECHAS.forEach(f=>{const o=document.createElement('option');o.value=f;o.text=f;ff.appendChild(o);});
    GRUPOS.forEach(g=>{const o=document.createElement('option');o.value=g;o.text=g;fg.appendChild(o);});
  }
}

function loadCierreGlobalUI() {
  const cg = document.getElementById('cierre-global-grupos');
  const ce = document.getElementById('cierre-global-elim');
  const oa = document.getElementById('ocultar-apuestas');
  const wa = document.getElementById('toggle-wa');
  if (cg && configGlobal.cierreGrupos) cg.value = configGlobal.cierreGrupos;
  if (ce && configGlobal.cierreElim)   ce.value = configGlobal.cierreElim;
  if (oa) oa.checked = !!configGlobal.ocultarApuestas;
  if (wa) {
    wa.checked = !configGlobal.waDeshabilitado;
    wa.nextElementSibling && (wa.nextElementSibling.textContent = configGlobal.waDeshabilitado ? 'WhatsApp deshabilitado' : 'WhatsApp habilitado');
  }
}

function renderConfigPartidos() {
  const fF = document.getElementById('cfg-fil-fecha')?.value || '';
  const fG = document.getElementById('cfg-fil-grupo')?.value || '';
  const lista = PARTIDOS.filter(p=>(!fF||p.fecha===fF)&&(!fG||p.grupo===fG));
  const container = document.getElementById('config-partidos-lista');
  if (!container) return;
  const fechas = sortFechas([...new Set(lista.map(p=>p.fecha))]);
  container.innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div style="margin-bottom:16px;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--verde);margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border);">📅 ${f}</div>
      ${ps.map(p => {
        const cfg = configPartidos[p.id] || {};
        return `<div class="config-partido-row">
          <div class="config-partido-info">
            <div class="config-partido-name">⚽ ${p.local} vs ${p.visitante}</div>
            <div style="font-size:11px;color:var(--muted);">${p.grupo} · ${p.sede}</div>
          </div>
          <div class="config-partido-controls">
            <div>
              <label style="font-size:10px;margin-bottom:3px;">Cierre apuestas</label>
              <input type="datetime-local" value="${cfg.cierreISO||''}"
                onchange="saveCierrePartido('${p.id}', this.value)"
                style="font-size:12px;padding:6px 10px;width:auto;"/>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;">Desempate</div>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:12px;">
                <input type="checkbox" ${cfg.tarjetas?'checked':''} 
                  onchange="saveDesempate('${p.id}','tarjetas',this.checked);renderConfigPartidos();" 
                  style="width:14px;height:14px;flex-shrink:0;"/>
                🟨 Tarjetas amarillas
              </label>
              ${cfg.tarjetas ? `<div style="display:flex;align-items:center;gap:6px;margin-left:20px;">
                <label style="font-size:11px;color:var(--muted);white-space:nowrap;">Local:</label>
                <input type="number" min="0" max="20" value="${cfg.tarjetasLocal||0}"
                  onchange="saveDesempateValor('${p.id}','tarjetasLocal',this.value)"
                  style="width:52px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
                <label style="font-size:11px;color:var(--muted);white-space:nowrap;">Visitante:</label>
                <input type="number" min="0" max="20" value="${cfg.tarjetasVisitante||0}"
                  onchange="saveDesempateValor('${p.id}','tarjetasVisitante',this.value)"
                  style="width:52px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
              </div>` : ''}
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:12px;">
                <input type="checkbox" ${cfg.esquinas?'checked':''}
                  onchange="saveDesempate('${p.id}','esquinas',this.checked);renderConfigPartidos();"
                  style="width:14px;height:14px;flex-shrink:0;"/>
                🔄 Tiros de esquina
              </label>
              ${cfg.esquinas ? `<div style="display:flex;align-items:center;gap:6px;margin-left:20px;">
                <label style="font-size:11px;color:var(--muted);white-space:nowrap;">Local:</label>
                <input type="number" min="0" max="30" value="${cfg.esquinasLocal||0}"
                  onchange="saveDesempateValor('${p.id}','esquinasLocal',this.value)"
                  style="width:52px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
                <label style="font-size:11px;color:var(--muted);white-space:nowrap;">Visitante:</label>
                <input type="number" min="0" max="30" value="${cfg.esquinasVisitante||0}"
                  onchange="saveDesempateValor('${p.id}','esquinasVisitante',this.value)"
                  style="width:52px;text-align:center;padding:4px;font-size:13px;font-weight:600;border:1px solid var(--border);border-radius:6px;"/>
              </div>` : ''}
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}

async function cargarLinkUnico() {
  try {
    const snap = await db.collection('config').doc('acceso').get();
    if (snap.exists) {
      const link = snap.data().link;
      const el = document.getElementById('link-unico-display');
      if (el && link) el.textContent = link;
    }
  } catch(e) {}
}


function filtrarUsuarios(query) {
  const q = query.toLowerCase().trim();
  const source = window._allUsers || [];
  if (!source.length) return;
  const filtrados = !q ? source : source.filter(u =>
    (u.nombre||'').toLowerCase().includes(q) ||
    (u.email||'').toLowerCase().includes(q) ||
    (u.celular||'').toLowerCase().includes(q)
  );
  renderListaUsuarios(filtrados);
}

function invalidarCache() {
  _cachedUsuarios   = null;
  _cachedApuestasAd = null;
  _cacheTs          = 0;
}

async function cargarUsuariosCache(force = false) {
  const ahora = Date.now();
  if (!force && _cachedUsuarios && (ahora - _cacheTs) < CACHE_TTL) return;

  // Paginación para traer todos los usuarios (Firestore limita a 1000 por query)
  let allUsuarios = [];
  let lastDoc = null;
  do {
    let query = db.collection('usuarios').orderBy('email').limit(500);
    if (lastDoc) query = query.startAfter(lastDoc);
    const snap = await query.get();
    allUsuarios = allUsuarios.concat(snap.docs.map(d => ({id: d.id, ...d.data()})));
    lastDoc = snap.docs.length === 500 ? snap.docs[snap.docs.length - 1] : null;
  } while (lastDoc);

  const snapA = await db.collection('apuestas').get();
  _cachedUsuarios   = allUsuarios;
  _cachedApuestasAd = snapA.docs.map(d => ({id: d.id, ...d.data()}));
  _cacheTs = Date.now();
}

async function renderUsuarios(force = false) {
  const container = document.getElementById("lista-usuarios");
  container.innerHTML = '<div class="empty">Cargando...</div>';
  try {
    await cargarUsuariosCache(force);
    const users = _cachedUsuarios.map(u => ({uid: u.id || u.uid, ...u}));
    if (!users.length) { container.innerHTML='<div class="empty"><div class="empty-ico">👥</div>No hay usuarios</div>'; return; }

    const conApuestas = new Set((_cachedApuestasAd||[]).map(a=>a.uid));
    const sinApostar  = users.filter(u=>!conApuestas.has(u.uid) && u.rol !== 'admin');

    window._allUsers   = users;
    window._conApuestas = conApuestas;
    window._sinApostar  = sinApostar;

    // Reset buscador
    const buscador = document.getElementById('buscador-usuarios');
    if (buscador) buscador.value = '';

    renderListaUsuarios(users);
  } catch(e) { container.innerHTML='<div class="empty">Error al cargar usuarios: '+e.message+'</div>'; }
  renderLinksInvitacion();
}

function renderListaUsuarios(users) {
  const container = document.getElementById('lista-usuarios');
  if (!container) return;
  const conApuestas = window._conApuestas || new Set();
  const sinApostar = window._sinApostar || [];

  if (!users || !users.length) {
    container.innerHTML = '<div class="empty"><div class="empty-ico">🔍</div>Sin resultados</div>';
    return;
  }

  const btnRecordatorio = sinApostar.length > 0 && !document.getElementById('buscador-usuarios').value
    ? `<div style="padding:12px 16px;border-bottom:1px solid var(--border);background:var(--oro-light);">
        <div style="font-size:13px;font-weight:600;color:var(--oro);margin-bottom:8px;">⚠️ ${sinApostar.length} usuario(s) sin apuestas</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-gold btn-sm" onclick="enviarRecordatorioMasivo()">📲 WhatsApp masivo</button>
          <button class="btn btn-outline btn-sm" onclick="copiarListaSinApostar()">📋 Copiar lista</button>
        </div>
      </div>` : '';

  container.innerHTML = `<div class="card" style="padding:0;overflow:hidden;">
    ${btnRecordatorio}
    ${users.map(u=>{
      const ini = (u.nombre||'?').split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
      const isMe = u.uid===currentUser.uid;
      const tieneApuesta = conApuestas.has(u.uid);
      const isAdmin = u.rol==="admin";
      return `<div class="user-row">
        <div style="width:38px;height:38px;border-radius:50%;background:${isAdmin?"var(--oro)":"var(--verde)"};color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${ini}</div>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:14px;">${u.nombre||u.email}${isAdmin?'<span class="admin-badge">Admin</span>':''}
            ${!tieneApuesta?'<span style="background:#fee2e2;color:var(--rojo);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:4px;">Sin apuestas</span>':''}
          </div>
          <div style="font-size:12px;color:var(--muted);">📱 ${u.celular||"—"} · ${u.email}</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
          ${u.celular&&!tieneApuesta?`<button class="btn btn-gold btn-sm" onclick="enviarWhatsApp('${u.celular}','${u.nombre}')" title="Enviar recordatorio WhatsApp">📲</button>`:''}
          ${!isMe?`
            <button class="btn btn-sm ${isAdmin?"btn-outline":"btn-gold"}" onclick="toggleAdmin('${u.uid}','${u.nombre}','${u.rol}')" title="${isAdmin?"Quitar admin":"Hacer admin"}">
              ${isAdmin?"👤 Quitar admin":"👑 Hacer admin"}
            </button>
            <button class="btn btn-outline btn-sm" onclick="resetPassword('${u.uid}','${u.nombre}','${u.email||u.celular}')" title="Restablecer contraseña">🔑</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarUsuario('${u.uid}','${u.nombre}')" title="Eliminar">🗑</button>
          `:'<span style="font-size:11px;color:var(--muted);">Tú</span>'}
        </div>
      </div>`;
    }).join("")}
  </div>`;
}

async function toggleAdmin(uid, nombre, rolActual) {
  const rolLimpio = (rolActual === "admin") ? "admin" : "user";
  const nuevoRol = rolLimpio === "admin" ? "user" : "admin";
  const accion   = nuevoRol === "admin" ? "hacer admin" : "quitar rol de admin";
  if (!confirm(`¿Quieres ${accion} a ${nombre}?`)) return;
  try {
    await db.collection("usuarios").doc(uid).update({ rol: nuevoRol });
    const ver = await db.collection("usuarios").doc(uid).get();
    if (ver.data()?.rol !== nuevoRol) { toast("Error: el rol no se guardó"); return; }
    toast(`✓ ${nombre} ahora es ${nuevoRol === "admin" ? "administrador" : "participante"}`);
    invalidarCache();
    renderUsuarios(true);
  } catch(e) { toast("Error: " + e.message); }
}

async function eliminarUsuario(uid, nombre) {
  if(!confirm(`¿Eliminar a ${nombre}? Sus apuestas se mantendrán.`)) return;
  await db.collection("usuarios").doc(uid).delete();
  toast("Usuario eliminado"); invalidarCache(); renderUsuarios();
}

async function resetPassword(uid, nombre, emailOCedula) {
  const cedula = (emailOCedula || '').split('@')[0];
  if (!cedula) { toast('No se pudo obtener la cédula'); return; }
  if (!confirm('¿Restablecer contraseña de ' + nombre + '?\nContraseña temporal: ' + cedula)) return;
  try {
    toast('⏳ Restableciendo...');
    const resetFn = firebase.functions().httpsCallable('resetUserPassword');
    await resetFn({ uid: uid, nuevaPass: cedula });
    await db.collection('usuarios').doc(uid).update({ debeActualizarPass: true });
    toast('✓ Contraseña de ' + nombre + ' restablecida a: ' + cedula);
  } catch(e) { toast('Error: ' + (e.message || 'No se pudo restablecer')); }
}

async function guardarHorarioElim() {
  const id        = document.getElementById('horario-elim-id').value;
  const hora      = document.getElementById('horario-elim-hora').value;
  const local     = document.getElementById('horario-elim-local')?.value.trim() || '';
  const visitante = document.getElementById('horario-elim-visit')?.value.trim() || '';
  const sede      = document.getElementById('horario-elim-sede')?.value.trim() || '';
  const tarjetas  = document.getElementById('horario-elim-tarjetas')?.checked || false;
  const esquinas  = document.getElementById('horario-elim-esquinas')?.checked || false;
  if (!id) { toast('Selecciona un partido'); return; }
  // Guardar horario
  if (hora) {
    const iso = hora.slice(0, 16) + ':00';
    await db.collection('horarios').doc(id).set({ horaInicio: iso }, { merge: true });
    _horariosPartidos[id] = iso;
  }
  // Guardar equipos, sede y desempate
  const datosPartido = {};
  if (local && visitante) { datosPartido.local = local; datosPartido.visitante = visitante; }
  if (sede) datosPartido.sede = sede;
  datosPartido.tarjetas = tarjetas;
  datosPartido.esquinas = esquinas;
  if (Object.keys(datosPartido).length > 0) {
    // Actualizar en memoria
    const p = PARTIDOS.find(x => x.id === id);
    if (p) {
      if (local) p.local = local;
      if (visitante) p.visitante = visitante;
      if (sede) p.sede = sede;
    }
    // Actualizar configPartidos para desempate
    if (!configPartidos[id]) configPartidos[id] = {};
    configPartidos[id].tarjetas = tarjetas;
    configPartidos[id].esquinas = esquinas;
    // Guardar en Firestore
    await db.collection('config').doc('partidos-elim').set({ [id]: datosPartido }, { merge: true });
    await db.collection('config').doc('partidos').set({ [id]: { tarjetas, esquinas } }, { merge: true });
  }
  toast('✓ Guardado: ' + id + (local ? ' — ' + local + ' vs ' + visitante : '') + (hora ? ' @ ' + hora.slice(11,16) : ''));
  cargarHorariosElim();
  renderDieciseis();
}

async function cargarHorariosElim() {
  const container = document.getElementById('lista-horarios-elim');
  if (!container) return;
  try {
    const gruposIds = new Set(['A1','A2','A3','A4','A5','A6','B1','B2','B3','B4','B5','B6','C1','C2','C3','C4','C5','C6','D1','D2','D3','D4','D5','D6','E1','E2','E3','E4','E5','E6','F1','F2','F3','F4','F5','F6','G1','G2','G3','G4','G5','G6','H1','H2','H3','H4','H5','H6','I1','I2','I3','I4','I5','I6','J1','J2','J3','J4','J5','J6','K1','K2','K3','K4','K5','K6','L1','L2','L3','L4','L5','L6']);
    const [snapH, snapE] = await Promise.all([
      db.collection('horarios').get(),
      db.collection('config').doc('partidos-elim').get()
    ]);
    const equipos = snapE.exists ? snapE.data() : {};
    const elim = snapH.docs.filter(d => !gruposIds.has(d.id)).sort((a,b) => a.id.localeCompare(b.id));
    // También incluir partidos con equipos pero sin horario
    const conEquipos = Object.keys(equipos).filter(id => !elim.find(d => d.id === id));
    if (!elim.length && !conEquipos.length) { container.innerHTML = 'Sin partidos eliminatorios configurados.'; return; }
    const items = [
      ...elim.map(d => ({ id: d.id, hora: d.data().horaInicio||'', ...((equipos[d.id])||{}) })),
      ...conEquipos.map(id => ({ id, hora: '', ...(equipos[id]||{}) }))
    ].sort((a,b) => a.id.localeCompare(b.id));
    container.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">' +
      items.map(d => {
        const equiposStr = d.local && d.local !== 'Por confirmar' ? d.local + ' vs ' + d.visitante : '';
        return '<div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:6px 10px;font-size:12px;">' +
          '<span style="font-weight:700;color:var(--verde);">' + d.id + '</span> ' +
          (equiposStr ? '<span style="color:var(--text);">' + equiposStr + '</span> ' : '') +
          (d.hora ? '<span style="color:var(--muted);">' + d.hora.slice(11,16) + '</span>' : '') +
          '</div>';
      }).join('') + '</div>';
  } catch(e) { container.innerHTML = 'Error: ' + e.message; }
}

function enviarWhatsApp(celular, nombre) {
  if (configGlobal.waDeshabilitado) { toast('📵 WhatsApp deshabilitado por el administrador'); return; }
  const msg = encodeURIComponent(
    'Hola ' + nombre + ' \uD83D\uDC4B\n\n' +
    '\u00A1Te recordamos que a\u00FAn no has registrado tus apuestas en la Polla Mundialista 2026! \u26BD\uD83C\uDFC6\n\n' +
    'Ingresa aqu\u00ED: https://lopetego-spec.github.io/Polla-Mundialista/\n\n' +
    '\u00A1No te quedes por fuera!'
  );
  // Limpiar número: quitar espacios, guiones, +57, etc.
  const num = celular.replace(/[^0-9]/g,'');
  const numIntl = num.startsWith('57') ? num : '57' + num;
  window.open(`https://wa.me/${numIntl}?text=${msg}`, '_blank');
}

async function enviarRecordatorioMasivo() {
  await cargarUsuariosCache();
  const usuarios = _cachedUsuarios;
  const conApuestas = new Set(apuestas.map(a=>a.uid));
  const sinApostar = snap.docs.map(d=>({uid:d.id,...d.data()})).filter(u=>!conApuestas.has(u.uid)&&u.celular);
  if (!sinApostar.length) { toast("Todos ya tienen apuestas 🎉"); return; }
  if (!confirm(`¿Enviar recordatorio por WhatsApp a ${sinApostar.length} usuario(s) sin apuestas?`)) return;
  sinApostar.forEach((u, i) => {
    setTimeout(() => enviarWhatsApp(u.celular, u.nombre), i * 1500);
  });
  toast(`📲 Abriendo WhatsApp para ${sinApostar.length} usuario(s)...`);
}

async function copiarListaSinApostar() {
  await cargarUsuariosCache();
  const usuarios = _cachedUsuarios;
  const conApuestas = new Set(apuestas.map(a=>a.uid));
  const sinApostar = snap.docs.map(d=>({uid:d.id,...d.data()})).filter(u=>!conApuestas.has(u.uid));
  const lista = sinApostar.map(u=>`• ${u.nombre} (${u.celular||u.email})`).join(' ');

  navigator.clipboard.writeText('Usuarios sin apuestas:\n' + lista);
  toast(`📋 Lista copiada (${sinApostar.length} usuarios)`);
}

// SYNC API-FOOTBALL
const TEAM_MAP = {"México":"Mexico","Sudáfrica":"South Africa","Corea del Sur":"South Korea","Rep. Checa":"Czech Republic","Canadá":"Canada","Bosnia y Herz.":"Bosnia and Herzegovina","Qatar":"Qatar","Suiza":"Switzerland","Brasil":"Brazil","Marruecos":"Morocco","Haití":"Haiti","Escocia":"Scotland","Estados Unidos":"United States","Australia":"Australia","Turquía":"Turkey","Paraguay":"Paraguay","Alemania":"Germany","Curazao":"Curaçao","Costa de Marfil":"Ivory Coast","Ecuador":"Ecuador","Países Bajos":"Netherlands","Japón":"Japan","Suecia":"Sweden","Túnez":"Tunisia","Bélgica":"Belgium","Egipto":"Egypt","Irán":"Iran","Nueva Zelanda":"New Zealand","España":"Spain","Cabo Verde":"Cape Verde","Uruguay":"Uruguay","Arabia Saudita":"Saudi Arabia","Francia":"France","Senegal":"Senegal","Noruega":"Norway","Irak":"Iraq","Argentina":"Argentina","Argelia":"Algeria","Austria":"Austria","Jordania":"Jordan","Portugal":"Portugal","Rep. Dem. Congo":"Democratic Republic of the Congo","Colombia":"Colombia","Uzbekistán":"Uzbekistan","Inglaterra":"England","Croacia":"Croatia","Ghana":"Ghana","Panamá":"Panama"};

function showSyncMsg(msg,tipo){
  const el=document.getElementById("sync-msg");el.style.display="block";
  el.style.background=tipo==="ok"?"var(--verde-light)":tipo==="err"?"#fee2e2":"var(--oro-light)";
  el.style.color=tipo==="ok"?"var(--verde)":tipo==="err"?"var(--rojo)":"#854F0B";
  el.style.border="1px solid "+(tipo==="ok"?"#a3d9b8":tipo==="err"?"#fecaca":"#f0d89a");
  el.textContent=msg;
}

async function syncResultados() {
  const btn=document.getElementById("btn-sync");
  btn.disabled=true;btn.textContent="⏳ Sincronizando...";
  showSyncMsg("Consultando worldcup26.ir...","info");
  try {
    const res = await fetch('https://worldcup26.ir/get/games');
    const data = await res.json();
    const games = data.games || [];
    const terminados = games.filter(g => g.finished === 'TRUE' && g.home_score !== null && g.away_score !== null);
    if(!terminados.length){showSyncMsg("⚠ No hay partidos finalizados aún","info");btn.disabled=false;btn.textContent="🔄 Sincronizar API";return;}
    let actualizados=0;
    const batch = db.batch();
    // Guardar horarios de TODOS los partidos para cierre automático
    const batchHorarios = db.batch();
    games.forEach(g => {
      const partido = PARTIDOS.find(p => {
        const lm = TEAM_MAP[p.local]    || p.local;
        const vm = TEAM_MAP[p.visitante] || p.visitante;
        return (lm === g.home_team_name_en && vm === g.away_team_name_en) ||
               (lm === g.away_team_name_en && vm === g.home_team_name_en);
      });
      if (!partido || !g.local_date) return;
      // Parsear fecha "MM/DD/YYYY HH:mm" a ISO
      const parts = g.local_date.split(' ');
      const [month, day, year] = parts[0].split('/');
      const [hour, min] = parts[1].split(':');
      const isoStr = `${year}-${month}-${day}T${hour}:${min}:00`;
      _horariosPartidos[partido.id] = isoStr;
      batchHorarios.set(db.collection('horarios').doc(partido.id), { horaInicio: isoStr }, { merge: true });
    });
    await batchHorarios.commit();

    terminados.forEach(g => {
      // Buscar partido por nombre de equipo (en inglés)
      const partido = PARTIDOS.find(p => {
        const lm = TEAM_MAP[p.local]    || p.local;
        const vm = TEAM_MAP[p.visitante] || p.visitante;
        return (lm === g.home_team_name_en && vm === g.away_team_name_en) ||
               (lm === g.away_team_name_en && vm === g.home_team_name_en);
      });
      if (!partido) return;
      const lm = TEAM_MAP[partido.local] || partido.local;
      const esLocal = lm === g.home_team_name_en;
      const r = {
        local:     esLocal ? parseInt(g.home_score) : parseInt(g.away_score),
        visitante: esLocal ? parseInt(g.away_score) : parseInt(g.home_score),
        ts: firebase.firestore.FieldValue.serverTimestamp()
      };
      // Usar merge:true para no sobreescribir tarjetas/esquinas guardadas manualmente
      resultados[partido.id] = { ...(resultados[partido.id]||{}), ...r };
      batch.set(db.collection("resultados").doc(partido.id), r, { merge: true });
      actualizados++;
    });
    await batch.commit();
    // Recalcular puntos
    const batchPts = db.batch();
    apuestas.forEach(a => {
      if (a.partidoId && resultados[a.partidoId])
        batchPts.update(db.collection("apuestas").doc(a.id), {puntos: calcPuntos(a)});
    });
    await batchPts.commit();
    showSyncMsg(`✓ ${actualizados} partido(s) actualizado(s)`,"ok");
    toast(`✓ ${actualizados} resultado(s) sincronizados`);
    renderResultados();renderApuestas();renderTabla();renderPartidos();
  } catch(e){showSyncMsg("❌ Error: "+e.message,"err");}
  btn.disabled=false;btn.textContent="🔄 Sincronizar API";
}

// EXPORTAR
function exportCSV(){
  if(!apuestas.length){toast("No hay apuestas");return;}
  const h=["ID","Participante","Tipo","Local","Visitante","Goles Local","Goles Visitante","Campeón","Grupo","Fecha","Puntos"];
  const rows=apuestas.map(a=>[a.numId||a.id,a.nombre,a.tipo,a.local||"",a.visitante||"",a.golLocal??"",a.golVisitante??"",a.campeon||"",a.grupo||"",a.ts,calcPuntos(a)]);
  const csv=[h,...rows].map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="polla_mundialista_2026.csv";a.click();
  toast("✓ CSV exportado");
}
function exportXLSX(){
  if(!apuestas.length){toast("No hay apuestas");return;}
  const data=[["ID","Participante","Tipo","Local","Visitante","Goles Local","Goles Visitante","Campeón","Grupo","Fecha","Puntos"],...apuestas.map(a=>[a.numId||a.id,a.nombre,a.tipo,a.local||"",a.visitante||"",a.golLocal??"",a.golVisitante??"",a.campeon||"",a.grupo||"",a.ts,calcPuntos(a)])];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(data),"Apuestas");
  const personas=[...new Set(apuestas.map(a=>a.nombre))];
  const rank=[["Pos","Participante","Apuestas","Puntos"],...personas.map(p=>({n:p,pts:apuestas.filter(a=>a.nombre===p).reduce((s,a)=>s+calcPuntos(a),0),c:apuestas.filter(a=>a.nombre===p).length})).sort((a,b)=>b.pts-a.pts).map((r,i)=>[i+1,r.n,r.c,r.pts])];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rank),"Tabla");
  XLSX.writeFile(wb,"polla_mundialista_2026.xlsx");
  toast("✓ Excel exportado");
}

// TOAST
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800);}

// ARRANCAR

// ============================================================
// CARGUE MASIVO DE USUARIOS
// ============================================================
function abrirCargueUsuarios() {
  document.getElementById('modal-cargue').style.display = 'flex';
}
function cerrarCargueUsuarios() {
  document.getElementById('modal-cargue').style.display = 'none';
  document.getElementById('cargue-preview').innerHTML = '';
  document.getElementById('cargue-input').value = '';
  document.getElementById('cargue-lista-correos').value = '';
}

function procesarArchivoCargue(e) {
  const file = e.target.files[0];
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      let usuarios = [];
      if (ext === 'csv') {
        const lines = ev.target.result.split('\n').filter(l=>l.trim());
        const headers = lines[0].split(',').map(h=>h.trim().toLowerCase().replace(/[^a-z]/g,''));
        lines.slice(1).forEach(line => {
          const cols = line.split(',').map(c=>c.trim().replace(/^"|"$/g,''));
          const obj = {};
          headers.forEach((h,i) => obj[h] = cols[i]||'');
          usuarios.push(normalizarUsuario(obj));
        });
      } else {
        // Excel via SheetJS - loaded in HTML
        const data = new Uint8Array(ev.target.result);
        const wb = XLSX.read(data, {type:'array'});
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, {defval:''});
        rows.forEach(row => {
          const obj = {};
          Object.keys(row).forEach(k => obj[k.toLowerCase().replace(/[^a-z]/g,'')] = String(row[k]||''));
          usuarios.push(normalizarUsuario(obj));
        });
      }
      mostrarPreviewCargue(usuarios.filter(u=>u.correo));
    } catch(err) { toast('Error al leer el archivo: ' + err.message); }
  };
  if (ext === 'csv') reader.readAsText(file);
  else reader.readAsArrayBuffer(file);
}

function normalizarUsuario(obj) {
  return {
    nombre:  obj.nombre || obj.name || obj.n || '',
    celular: obj.celular || obj.telefono || obj.phone || obj.cel || '',
    correo:  obj.correo || obj.email || obj.mail || obj.e || ''
  };
}

function procesarListaCorreos() {
  const texto = document.getElementById('cargue-lista-correos').value;
  const correos = texto.split(/[,;\n]/).map(c=>c.trim()).filter(c=>c.includes('@'));
  const usuarios = correos.map(c => ({nombre: c.split('@')[0], celular: '', correo: c}));
  mostrarPreviewCargue(usuarios);
}

function mostrarPreviewCargue(usuarios) {
  const container = document.getElementById('cargue-preview');
  if (!usuarios.length) { container.innerHTML = '<p style="color:var(--rojo);font-size:13px;">No se encontraron usuarios válidos</p>'; return; }
  window._usuariosCargue = usuarios;
  container.innerHTML = '<div style="margin-top:14px;">'
    + '<div style="font-size:13px;font-weight:600;color:var(--verde);margin-bottom:8px;">✓ '+usuarios.length+' usuario(s) encontrado(s)</div>'
    + '<div style="max-height:180px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;margin-bottom:14px;">'
    + usuarios.map(u => '<div style="padding:8px 12px;border-bottom:1px solid var(--border);font-size:13px;display:flex;gap:8px;">'
        + '<span style="flex:1;font-weight:500;">'+(u.nombre||'—')+'</span>'
        + '<span style="color:var(--muted);">'+(u.celular||'')+'</span>'
        + '<span style="color:var(--verde);">'+u.correo+'</span>'
        + '</div>').join('')
    + '</div>'
    + '<button class="btn btn-primary" id="btn-ejecutar-cargue" onclick="ejecutarCargue()" style="width:100%;padding:12px 20px;">&#9997; Crear '+usuarios.length+' usuario(s)</button>'
    + '</div>';
}

async function ejecutarCargue() {
  const usuarios = window._usuariosCargue || [];
  const passTemp = (document.getElementById('cargue-password')||{}).value || '';
  if (!passTemp || passTemp.length < 6) { toast('⚠️ Define una contraseña temporal de al menos 6 caracteres'); return; }
  if (!usuarios.length) { toast('⚠️ No hay usuarios para cargar'); return; }

  const btn = document.getElementById('btn-ejecutar-cargue');
  btn.disabled = true;
  btn.textContent = 'Creando usuarios...';
  let ok = 0, err = 0, errores = [];

  for (const u of usuarios) {
    try {
      const apiKey = firebase.app().options.apiKey;
      const resp = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email: u.correo, password: passTemp, returnSecureToken: false})
      });
      const data = await resp.json();
      if (data.error) {
        if (data.error.message === 'EMAIL_EXISTS') { ok++; continue; } // ya existe, lo contamos como OK
        if (data.error.message && data.error.message.includes('TOO_MANY_ATTEMPTS')) {
          // Rate limit - wait 5 seconds and retry once
          await new Promise(r => setTimeout(r, 5000));
          const resp2 = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey, {
            method: 'POST', headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email: u.correo, password: passTemp, returnSecureToken: false})
          });
          const data2 = await resp2.json();
          if (data2.error) {
            if (data2.error.message === 'EMAIL_EXISTS') { ok++; continue; }
            throw new Error(data2.error.message);
          }
          const uid2 = data2.localId;
          await db.collection('usuarios').doc(uid2).set({
            nombre: u.nombre || u.correo.split('@')[0], celular: u.celular || '',
            email: u.correo, rol: 'user', debeActualizarPass: true,
            creado: firebase.firestore.FieldValue.serverTimestamp()
          });
          ok++; continue;
        }
        throw new Error(data.error.message);
      }
      const uid = data.localId;
      await db.collection('usuarios').doc(uid).set({
        nombre:             u.nombre || u.correo.split('@')[0],
        celular:            u.celular || '',
        email:              u.correo,
        rol:                'user',
        debeActualizarPass: true,
        creado:             firebase.firestore.FieldValue.serverTimestamp()
      });
      ok++;
    } catch(e) {
      console.error('Error creando ' + u.correo + ':', e.message); errores.push(u.correo + ': ' + e.message);
      err++;
    }
    btn.textContent = 'Creando... ' + (ok+err) + '/' + usuarios.length;
      await new Promise(r => setTimeout(r, 300)); // delay para evitar rate limit
  }

  const base = window.location.origin + window.location.pathname;
  await db.collection('config').doc('acceso').set({
    link: base, passTemp, actualizadoPor: currentUser.uid,
    actualizado: firebase.firestore.FieldValue.serverTimestamp()
  });

  document.getElementById('cargue-resultado').style.display = 'block';
  document.getElementById('cargue-resultado-texto').textContent = ok + ' usuario(s) creado(s)' + (err ? ' · ' + err + ' error(es)' : '') + (errores.length ? ' | Primer error: ' + errores[0] : '');
  document.getElementById('cargue-link-unico').textContent = base;
  const linkDisplay = document.getElementById('link-unico-display');
  if (linkDisplay) linkDisplay.textContent = base;

  toast('✓ ' + ok + ' usuario(s) creado(s)' + (err ? ' · ' + err + ' errores' : ''));
  btn.disabled = false;
  invalidarCache();
  renderUsuarios();
}


// ============================================================
// BORRAR TODOS LOS USUARIOS
// ============================================================
async function confirmarBorrarTodosUsuarios() {
  const confirm1 = window.confirm('⚠️ ¿Estás seguro que quieres BORRAR TODOS los usuarios?\nEsta acción no se puede deshacer.');
  if (!confirm1) return;
  const confirm2 = window.confirm('🚨 ÚLTIMA CONFIRMACIÓN\n¿Borrar todos los usuarios excepto el admin?');
  if (!confirm2) return;
  await borrarTodosUsuarios();
}

async function borrarTodosUsuarios() {
  const toast_el = document.querySelector('.toast');
  try {
    // Get all users from Firestore
  await cargarUsuariosCache();
  const snap = {docs: _cachedUsuarios.map(u => ({id: u.id, data: () => u}))};
    const apiKey = firebase.app().options.apiKey;
    let ok = 0, err = 0;

    toast('🗑️ Borrando usuarios...');

    for (const doc of snap.docs) {
      const data = doc.data();
      // Skip admin
      if (data.email === ADMIN_EMAIL || data.rol === 'admin') continue;
      try {
        // Delete from Firestore
        await db.collection('usuarios').doc(doc.id).delete();
        // Delete from Firebase Auth via REST
        const idTokenRes = await firebase.auth().currentUser.getIdToken();
        await fetch('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=' + apiKey, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({idToken: idTokenRes, localId: doc.id})
        });
        ok++;
      } catch(e) {
        // If Auth delete fails, at least Firestore was deleted
        err++;
      }
    }
    toast('✓ ' + ok + ' usuario(s) eliminado(s)' + (err ? ' · ' + err + ' no eliminados de Auth' : ''));
    renderUsuarios();
  } catch(e) {
    toast('❌ Error: ' + e.message);
  }
}

function copiarLinkUnico() {
  const el = document.getElementById('cargue-link-unico') || document.getElementById('link-unico-display');
  if (!el || !el.textContent || el.textContent.includes('Carga')) { toast('⚠️ No hay link generado'); return; }
  navigator.clipboard.writeText(el.textContent).then(() => toast('✓ Link copiado'));
}


// ============================================================
// INVITACIONES
// ============================================================
function generarLinkInvitacionSimple() {
  // Simple version for modal preview (async version is generarLinkInvitacion)
  const base = window.location.origin + window.location.pathname;
  const ref   = btoa(currentUser.uid + '|' + currentUser.nombre + '|pending');
  return base + '?ref=' + ref;
}

function abrirModalInvitar() {
  document.getElementById('modal-invitar').style.display = 'flex';
  // Clear fields
  ['invitar-nombre','invitar-email','invitar-tel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const container = document.getElementById('invitar-link-preview');
  if (container) container.innerHTML = '';
}

function cerrarModalInvitar() {
  document.getElementById('modal-invitar').style.display = 'none';
}

// enviarInvitacionCorreo replaced by enviarInvitacionEmail/WA

// Leer ref de invitacion al cargar
function leerRefInvitacion() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (!ref) return null;
  try {
    const decoded = atob(ref);
    const [uid, nombre] = decoded.split('|');
    return { uid, nombre };
  } catch(e) { return null; }
}

// Guardar quien invitó al registrarse
async function guardarInvitacion(newUid) {
  const ref = leerRefInvitacion();
  if (!ref) return;
  await db.collection('usuarios').doc(newUid).update({ invitadoPor: ref.uid, invitadoPorNombre: ref.nombre });
}


// ============================================================
// PLANTILLA DESCARGA
// ============================================================
function descargarPlantilla() {
  const data = [
    ['nombre', 'celular', 'correo'],
    ['Juan Perez', '3001234567', 'juan@correo.com'],
    ['Maria Lopez', '3009876543', 'maria@correo.com'],
  ];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(data), 'Usuarios');
  XLSX.writeFile(wb, 'plantilla_usuarios.xlsx');
  toast('Plantilla descargada');
}


// ============================================================
// SLOGAN EDITABLE
// ============================================================
async function cargarSlogan() {
  try {
    const snap = await db.collection('config').doc('global').get();
    if (snap.exists && snap.data().slogan) {
      const slogan = snap.data().slogan;
      const els = ['header-slogan', 'auth-slogan'];
      els.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = slogan;
      });
      const inp = document.getElementById('inp-slogan');
      if (inp) inp.value = slogan;
    }
  } catch(e) { console.error('Error cargando slogan:', e); }
}

async function guardarSlogan() {
  const slogan = document.getElementById('inp-slogan')?.value.trim();
  if (!slogan) { toast('Escribe un slogan'); return; }
  await db.collection('config').doc('global').set({ slogan }, { merge: true });
  // Update UI
  ['header-slogan', 'auth-slogan'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = slogan;
  });
  toast('✓ Slogan actualizado');
}


// ============================================================
// CONTROL DE INVITACIONES
// ============================================================
let invitacionValida = false;
let invitacionData  = null; // { uid, nombre, token }

async function verificarInvitacion() {
  const params = new URLSearchParams(window.location.search);
  const ref    = params.get('ref');
  const tab    = document.getElementById('tab-reg-btn');
  const form   = document.getElementById('form-registro');
  const bloq   = document.getElementById('registro-bloqueado');

  // Ocultar tab por defecto siempre al inicio
  if (tab) tab.style.display = 'none';
  if (form) form.style.display = 'none';

  if (!ref) {
    // Sin link — bloquear registro
    invitacionValida = false;
    if (tab)  tab.style.display = 'none';
    if (form) form.style.display = 'none';
    if (bloq) bloq.style.display = 'block';
    return;
  }

  try {
    const decoded = atob(ref);
    const parts   = decoded.split('|');
    // Format: uid|nombre|token
    if (parts.length >= 2) {
      const token = parts[2] || '';
      // Verify token exists in Firestore
      if (token) {
        const snap = await db.collection('invitaciones').doc(token).get();
        if (!snap.exists || snap.data().usado) {
          invitacionValida = false;
          if (tab)  tab.style.display = 'none';
          if (bloq) bloq.style.display = 'block';
          bloq.innerHTML = '<div style="text-align:center;padding:16px;"><div style="font-size:32px;margin-bottom:8px;">⛔</div><div style="font-size:14px;font-weight:600;color:var(--rojo);">Link inválido o ya usado</div><div style="font-size:13px;color:var(--muted);margin-top:6px;">Solicita un nuevo link al administrador</div></div>';
          return;
        }
      }
      // Cargar flag esCargue de Firestore
      let esCargue = false;
      try {
        if (token) {
          const invSnap = await db.collection('invitaciones').doc(token).get();
          if (invSnap.exists) esCargue = invSnap.data().esCargue || false;
        }
      } catch(e) {}
      invitacionValida = true;
      invitacionData   = { uid: parts[0], nombre: parts[1], token, esCargue };
      if (tab)  { tab.style.display = ''; tab.click(); }
      if (bloq) bloq.style.display = 'none';
      // Pre-fill nombre if available from URL
    }
  } catch(e) {
    invitacionValida = false;
    if (tab)  tab.style.display = 'none';
  }
}

async function marcarInvitacionUsada(token) {
  if (!token) return;
  try {
    await db.collection('invitaciones').doc(token).update({ usado: true, usadoEn: firebase.firestore.FieldValue.serverTimestamp() });
  } catch(e) { console.error('Error marcando invitacion:', e); }
}

// ============================================================
// GENERAR LINKS DE INVITACION (ADMIN)
// ============================================================
async function generarLinkInvitacion(correoDestino, nombreDestino) {
  // Verificar si el usuario ya invitó (máximo 1 invitación por usuario no-admin)
  if (currentUser.rol !== 'admin') {
    const snap = await db.collection('invitaciones')
      .where('creadoPor', '==', currentUser.uid).limit(1).get();
    if (!snap.empty) {
      toast('⚠️ Solo puedes enviar una invitación');
      return null;
    }
  }
  const token  = 'inv_' + Date.now() + '_' + Math.random().toString(36).substr(2,8);
  const base   = window.location.origin + window.location.pathname;
  const ref    = btoa(currentUser.uid + '|' + currentUser.nombre + '|' + token);
  const link   = base + '?ref=' + ref;

  // Save token to Firestore
  await db.collection('invitaciones').doc(token).set({
    token,
    creadoPor:        currentUser.uid,
    creadoPorNombre:  currentUser.nombre,
    correoDestino:    correoDestino || '',
    nombreDestino:    nombreDestino || '',
    usado:            false,
    creado:           firebase.firestore.FieldValue.serverTimestamp()
  });

  // Enviar por correo si se proporcionó email
  if (correoDestino && correoDestino.includes('@')) {
    const enviado = await enviarCorreoInvitacion(correoDestino, nombreDestino, link);
    if (enviado) {
      toast('✉️ Invitación enviada a ' + correoDestino);
    } else {
      navigator.clipboard.writeText(link);
      toast('⚠️ Error enviando correo — link copiado');
    }
  } else {
    navigator.clipboard.writeText(link);
    toast('📋 Link copiado y guardado');
  }
  renderLinksInvitacion();
  return link;
}

async function renderLinksInvitacion() {
  const container = document.getElementById('lista-invitaciones');
  if (!container) return;
  container.innerHTML = '<div style="font-size:13px;color:var(--muted);padding:8px 0;">Cargando...</div>';
  try {
    const snap = await db.collection('invitaciones').orderBy('creado','desc').limit(20).get();
    if (snap.empty) {
      container.innerHTML = '<div style="font-size:13px;color:var(--muted);padding:8px 0;">No hay links generados aún</div>';
      return;
    }
    const base = window.location.origin + window.location.pathname;
    container.innerHTML = snap.docs.map(doc => {
      const d    = doc.data();
      const ref  = btoa((d.creadoPor||'') + '|' + (d.creadoPorNombre||'') + '|' + d.token);
      const link = base + '?ref=' + ref;
      return `<div style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:600;">${d.creadoPorNombre||'Admin'}
            <span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:6px;background:${d.usado?'#fee2e2':'#d4edd9'};color:${d.usado?'#c0392b':'#1a6b3c'};">
              ${d.usado ? '✓ Usado' : '⏳ Pendiente'}
            </span>
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${link}</div>
        </div>
        <div style="display:flex;gap:6px;flex-shrink:0;">
          ${!d.usado ? `<button class="btn btn-outline btn-sm" onclick="copiarLink('${link}')">📋 Copiar</button>
          <button class="btn btn-outline btn-sm" onclick="compartirWhatsAppInv('${link}','${d.creadoPorNombre||''}')">📲 WA</button>` : ''}
          <button class="btn btn-danger btn-sm" onclick="eliminarInvitacion('${doc.id}')">🗑</button>
        </div>
      </div>`;
    }).join('');
  } catch(e) {
    container.innerHTML = '<div style="font-size:13px;color:var(--rojo);">Error cargando links: ' + e.message + '</div>';
  }
}

function copiarLink(link) {
  navigator.clipboard.writeText(link);
  toast('📋 Link copiado');
}

function compartirWhatsAppInv(link, nombre) {
  const msg = encodeURIComponent(
    'Hola! Te invitamos a participar en la Polla Mundialista MROH 2026 \u26BD\n\n' +
    'Reg\u00EDstrate aqu\u00ED con tu link personal:\n' + link + '\n\n' +
    '\u00A1\u00DAnico e intransferible!'
  );
  window.open('https://wa.me/?text=' + msg, '_blank');
}

async function eliminarInvitacion(id) {
  if (!confirm('\u00BFEliminar este link?')) return;
  await db.collection('invitaciones').doc(id).delete();
  toast('Link eliminado');
  renderLinksInvitacion();
}


// ============================================================
// ENVIO DE INVITACION POR CORREO (EmailJS)
// ============================================================
async function enviarCorreoInvitacion(correoDestino, nombreDestino, link) {
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE, {
      nombre:      nombreDestino || correoDestino.split('@')[0],
      link:        link,
      invitado_por: currentUser ? currentUser.nombre : 'Administrador',
      to_email:    correoDestino
    });
    return true;
  } catch(e) {
    console.error('EmailJS error:', e);
    return false;
  }
}


async function enviarInvitacionEmail() {
  const nombre = document.getElementById('invitar-nombre')?.value.trim() || '';
  const email  = document.getElementById('invitar-email')?.value.trim()  || '';
  if (!email || !email.includes('@')) { toast('Ingresa un correo válido'); return; }
  const btn = event.target; btn.disabled = true; btn.textContent = '⏳ Enviando...';
  const link = await generarLinkInvitacion(email, nombre);
  btn.disabled = false; btn.textContent = '✉️ Enviar por correo';
  cerrarModalInvitar();
}

async function enviarInvitacionWA() {
  if (configGlobal.waDeshabilitado) { toast('📵 WhatsApp deshabilitado por el administrador'); return; }
  const nombre = document.getElementById('invitar-nombre')?.value.trim() || '';
  const email  = document.getElementById('invitar-email')?.value.trim()  || '';
  const tel    = document.getElementById('invitar-tel')?.value.trim()    || '';
  if (!tel) { toast('Ingresa el número de celular'); return; }
  const link = await generarLinkInvitacion(email || '', nombre);
  const msg = encodeURIComponent(
    'Hola ' + (nombre || 'amigo') + '! \n\n' +
    'Te invitamos a participar en la Polla Mundialista MROH 2026 \u26BD\n\n' +
    'Reg\u00EDstrate con tu link personal (solo para ti):\n' + link + '\n\n' +
    'Te invita: ' + currentUser.nombre
  );
  const num = tel.replace(/[^0-9]/g,'');
  const numIntl = num.startsWith('57') ? num : '57' + num;
  window.open('https://wa.me/' + numIntl + '?text=' + msg, '_blank');
  cerrarModalInvitar();
}

async function soloGenerarLink() {
  const nombre = document.getElementById('invitar-nombre')?.value.trim() || '';
  const email  = document.getElementById('invitar-email')?.value.trim()  || '';
  await generarLinkInvitacion(email || '', nombre);
  cerrarModalInvitar();
}


// ============================================================
// CREAR USUARIO INDIVIDUAL (ADMIN)
// ============================================================
function toggleFormUsuario() {
  const form = document.getElementById('form-nuevo-usuario');
  if (!form) return;
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  if (form.style.display === 'block') {
    // Clear fields
    ['nu-nombre','nu-celular','nu-correo','nu-pass'].forEach(id => {
      const el = document.getElementById(id);
      if (el && id !== 'nu-pass') el.value = '';
    });
  }
}

// toggleModoUsuario removed

async function crearUsuarioIndividual() {
  const nombre  = document.getElementById('nu-nombre')?.value.trim();
  const celular = document.getElementById('nu-celular')?.value.trim();
  const correo  = document.getElementById('nu-correo')?.value.trim();

  if (!nombre || !correo) { toast('\u26A0 Nombre y correo son obligatorios'); return; }
  if (!correo.includes('@')) { toast('\u26A0 Correo inv\u00E1lido'); return; }

  const btn = event.target;
  btn.disabled = true;
  btn.textContent = '\u23F3 Enviando invitaci\u00F3n...';

  try {
    await generarLinkInvitacion(correo, nombre);
    toast('\u2713 Invitaci\u00F3n enviada a ' + correo);
    toggleFormUsuario();
    renderUsuarios();
  } catch(e) {
    toast('\u274C Error: ' + e.message);
  }

  btn.disabled = false;
  btn.textContent = '\u2713 Confirmar';
}


// ============================================================
// TEXTOS EDITABLES (admin)
// ============================================================
const TEXTOS_DEFAULT = {
  // Header
  app_titulo:       'Polla Mundialista MROH 2026',
  app_subtitulo:    '',
  app_slogan:       '',
  // Navegación
  nav_nueva:        '📝 Nueva apuesta',
  nav_partidos:     '⚽ Partidos',
  nav_apuestas:     '📋 Apuestas',
  nav_resultados:   '🎯 Resultados',
  nav_tabla:        '🏅 Tabla',
  nav_admin:        '⚙️ Admin',
  // Secciones principales
  sec_nueva_titulo: 'Registrar nueva apuesta',
  sec_partidos_titulo: 'Fixture — Fase de grupos',
  sec_resultados_titulo: 'Ingresar resultados reales',
  sec_tabla_titulo: 'Clasificación',
  // Tabla stats
  stat_apuestas:    'Apuestas',
  stat_participantes: 'Participantes',
  stat_partidos:    'Partidos cubiertos',
  // Botones clave
  btn_registrar:    '✓ Registrar apuesta',
  btn_sync:         '🔄 Sincronizar API',
  btn_exportcsv:    '⬇ CSV',
  btn_exportxlsx:   '⬇ Excel',
  // Auth
  auth_login_titulo:    'Ingresar',
  auth_reg_titulo:      'Registrarse',
  auth_btn_login:       'Ingresar →',
  auth_btn_reg:         'Crear cuenta →',
  // Puntuación info
  pts_titulo:       'Sistema de puntuación:',
  // Invitar
  btn_invitar:      '💌 Invitar',
  toast_apuesta_ok: '✓ Desafío registrado',
};

let textos = {...TEXTOS_DEFAULT};

async function cargarTextos() {
  try {
    const snap = await db.collection('config').doc('textos').get();
    if (snap.exists) {
      textos = {...TEXTOS_DEFAULT, ...snap.data()};
    }
    aplicarTextos();
  } catch(e) { console.error('Error cargando textos:', e); }
}

function aplicarTextos() {
  const map = {
    // Header (subtitulo y slogan ocultos por diseño)
    'auth-titulo':       textos.app_titulo,
    'auth-slogan':       textos.app_slogan,
    // Secciones
    'sec-nueva-titulo':  textos.sec_nueva_titulo,
    'sec-partidos-titulo': textos.sec_partidos_titulo,
    'sec-resultados-titulo': textos.sec_resultados_titulo,
    'sec-tabla-titulo':  textos.sec_tabla_titulo,
    // Stats
    'stat-lbl-apuestas': textos.stat_apuestas,
    'stat-lbl-partic':   textos.stat_participantes,
    'stat-lbl-partidos': textos.stat_partidos,
    // Botones
    'btn-registrar':     textos.btn_registrar,
    'btn-sync':          textos.btn_sync,
    'btn-invitar':       textos.btn_invitar,
    // Auth
    'tab-login-btn':     textos.auth_login_titulo,
    'tab-reg-btn':       textos.auth_reg_titulo,
    'btn-login':         textos.auth_btn_login,
    'btn-reg':           textos.auth_btn_reg,
    'pts-info-label':    textos.pts_titulo,
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) {
      if (val) {
        el.textContent = val;
        el.style.display = '';
      } else {
        el.textContent = '';
        el.style.display = 'none';
      }
    }
  });
  // Nav buttons (by data-nav attribute)
  const navMap = {
    'nueva': textos.nav_nueva,
    'partidos': textos.nav_partidos,
    'apuestas': textos.nav_apuestas,
    'resultados': textos.nav_resultados,
    'tabla': textos.nav_tabla,
    'admin': textos.nav_admin,
  };
  document.querySelectorAll('nav button[data-nav]').forEach(btn => {
    const key = btn.getAttribute('data-nav');
    if (navMap[key]) btn.textContent = navMap[key];
  });
}

async function guardarTextos() {
  const campos = Object.keys(TEXTOS_DEFAULT);
  campos.forEach(k => {
    const el = document.getElementById('txt-' + k);
    if (el) textos[k] = el.value || TEXTOS_DEFAULT[k];
  });
  await db.collection('config').doc('textos').set(textos);
  aplicarTextos();
  toast('✓ Textos guardados');
}

function resetTextos() {
  if (!confirm('¿Restaurar todos los textos por defecto?')) return;
  textos = {...TEXTOS_DEFAULT};
  db.collection('config').doc('textos').set(textos);
  aplicarTextos();
  renderTextos();
  toast('✓ Textos restaurados');
}

function renderTextos() {
  const container = document.getElementById('textos-lista');
  if (!container) return;

  const grupos = [
    { titulo: '🏷️ Header y título', keys: ['app_titulo','app_subtitulo','app_slogan'] },
    { titulo: '🗂️ Navegación', keys: ['nav_nueva','nav_partidos','nav_apuestas','nav_resultados','nav_tabla','nav_admin'] },
    { titulo: '📄 Títulos de secciones', keys: ['sec_nueva_titulo','sec_partidos_titulo','sec_resultados_titulo','sec_tabla_titulo'] },
    { titulo: '📊 Estadísticas', keys: ['stat_apuestas','stat_participantes','stat_partidos'] },
    { titulo: '🔘 Botones', keys: ['btn_registrar','btn_sync','btn_invitar','btn_exportcsv','btn_exportxlsx'] },
    { titulo: '💬 Mensajes', keys: ['toast_apuesta_ok'] },
    { titulo: '🔐 Autenticación', keys: ['auth_login_titulo','auth_reg_titulo','auth_btn_login','auth_btn_reg'] },
  ];

  container.innerHTML = grupos.map(g => `
    <div style="margin-bottom:20px;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--verde);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid var(--border);">${g.titulo}</div>
      ${g.keys.map(k => `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
          <label style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;min-width:160px;flex-shrink:0;">${k.replace(/_/g,' ')}</label>
          <input type="text" id="txt-${k}" value="${(textos[k]||'').replace(/"/g,'&quot;')}"
            placeholder="${(TEXTOS_DEFAULT[k]||'').replace(/"/g,'&quot;')}"
            style="flex:1;min-width:200px;padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:Inter,sans-serif;background:var(--bg);"
            oninput="textos['${k}']=this.value;aplicarTextos();"/>
          <button onclick="document.getElementById('txt-${k}').value=TEXTOS_DEFAULT['${k}'];textos['${k}']=TEXTOS_DEFAULT['${k}'];aplicarTextos();"
            style="background:none;border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:11px;cursor:pointer;color:var(--muted);flex-shrink:0;"
            title="Restablecer">↩</button>
        </div>`).join('')}
    </div>`).join('');
}


// ============================================================
// PUNTOS POR FASE
// ============================================================
function getFase(partidoId) {
  if (!partidoId) return 'campeon';
  const grupos = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  const letra = partidoId[0];
  if (grupos.includes(letra)) return 'grupos';
  if (partidoId.startsWith('R16')) return 'octavos';
  if (partidoId.startsWith('QF'))  return 'cuartos';
  if (partidoId.startsWith('SF'))  return 'semis';
  if (partidoId.startsWith('F'))   return 'final';
  return 'otros';
}

function calcPuntosPorFase(apuestasPersona) {
  const fases = { grupos: 0, octavos: 0, cuartos: 0, semis: 0, final: 0, campeon: 0 };
  apuestasPersona.forEach(a => {
    const pts = calcPuntos(a);
    if (pts > 0) {
      const fase = getFase(a.partidoId);
      if (fases[fase] !== undefined) fases[fase] += pts;
    }
  });
  return fases;
}


async function guardarResultadoEspecial(tipo) {
  const equipo = document.getElementById('res-'+tipo)?.value.trim();
  if (!equipo) { toast('⚠ Ingresa el equipo'); return; }
  resultados[tipo] = { equipo, ts: firebase.firestore.FieldValue.serverTimestamp() };
  await db.collection('resultados').doc(tipo).set(resultados[tipo]);
  // Recalcular puntos
  const afectadas = apuestas.filter(a=>a.tipo===tipo);
  const batch = db.batch();
  afectadas.forEach(a => batch.update(db.collection('apuestas').doc(a.id), {puntos: calcPuntos(a)}));
  await batch.commit();
  toast('✓ Resultado guardado: ' + equipo);
  renderResultados(); renderApuestas(); renderTabla();
}

async function borrarResultadoEspecial(tipo) {
  delete resultados[tipo];
  await db.collection('resultados').doc(tipo).delete();
  renderResultados(); renderApuestas(); renderTabla();
}


// ============================================================
// MODAL APUESTA DESDE PARTIDOS (lopetego)
// ============================================================
function cerrarModalApuesta() {
  const m = document.getElementById('modal-apuesta');
  if (m) m.style.display = 'none';
}

async function abrirApuestaPartido(pid) {
  const p = PARTIDOS.find(x => x.id === pid);
  if (!p) return;
  const abierto  = estaAbierto(pid, 'grupo');
  const cfg      = configPartidos[pid] || {};
  const existing = apuestas.find(a => a.uid === currentUser.uid && a.partidoId === pid);
  if (!abierto && !existing) { toast('⛔ Las apuestas para este partido están cerradas'); return; }

  let modal = document.getElementById('modal-apuesta');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-apuesta';
    modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2000;align-items:center;justify-content:center;padding:16px;';
    document.body.appendChild(modal);
  }

  const gl = existing ? existing.golLocal : 0;
  const gv = existing ? existing.golVisitante : 0;
  const tl = existing ? (existing.tarjetasLocal ?? 0) : 0;
  const tv = existing ? (existing.tarjetasVisitante ?? 0) : 0;
  const el = existing ? (existing.esquinasLocal ?? 0) : 0;
  const ev = existing ? (existing.esquinasVisitante ?? 0) : 0;

  modal.innerHTML = `
    <div style="background:white;border-radius:16px;padding:24px;width:100%;max-width:440px;max-height:90vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--verde);">${p.grupo} · ${p.fecha}</div>
          <div style="font-size:13px;color:var(--muted);">📍 ${p.sede}</div>
        </div>
        <button onclick="cerrarModalApuesta()" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--muted);">✕</button>
      </div>
      ${!abierto ? '<div style="background:#fee2e2;color:#c0392b;padding:8px 12px;border-radius:8px;font-size:13px;font-weight:600;margin-bottom:12px;">⛔ Apuestas cerradas — solo lectura</div>' : ''}
      ${existing ? '<div style="background:#d4edd9;color:#1a6b3c;padding:8px 12px;border-radius:8px;font-size:13px;font-weight:600;margin-bottom:12px;">✏️ Editando apuesta existente</div>' : ''}
      <div style="display:grid;grid-template-columns:1fr 48px 1fr;gap:10px;align-items:end;margin-bottom:16px;">
        <div style="text-align:center;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:6px;">${p.local}</div>
          <input type="number" id="ma-gl" min="0" max="20" value="${gl}" ${!abierto?'disabled':''}
            style="width:100%;text-align:center;font-size:28px;font-weight:700;padding:10px 4px;border:2px solid var(--border);border-radius:10px;font-family:Inter,sans-serif;background:${abierto?'white':'#f5f5f5'};"/>
        </div>
        <div style="text-align:center;padding-bottom:12px;font-size:14px;font-weight:700;color:var(--muted);">VS</div>
        <div style="text-align:center;">
          <div style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:6px;">${p.visitante}</div>
          <input type="number" id="ma-gv" min="0" max="20" value="${gv}" ${!abierto?'disabled':''}
            style="width:100%;text-align:center;font-size:28px;font-weight:700;padding:10px 4px;border:2px solid var(--border);border-radius:10px;font-family:Inter,sans-serif;background:${abierto?'white':'#f5f5f5'};"/>
        </div>
      </div>
      ${cfg.tarjetas ? `<div style="background:#fdf3dc;border-radius:10px;padding:12px;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:var(--oro);margin-bottom:8px;">🟨 Tarjetas amarillas</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <input type="number" id="ma-tl" min="0" max="20" value="${tl}" ${!abierto?'disabled':''} style="flex:1;text-align:center;font-size:20px;font-weight:700;padding:8px;border:1px solid var(--border);border-radius:8px;"/>
          <span style="color:var(--muted);">–</span>
          <input type="number" id="ma-tv" min="0" max="20" value="${tv}" ${!abierto?'disabled':''} style="flex:1;text-align:center;font-size:20px;font-weight:700;padding:8px;border:1px solid var(--border);border-radius:8px;"/>
        </div>
      </div>` : ''}
      ${cfg.esquinas ? `<div style="background:#e8eef7;border-radius:10px;padding:12px;margin-bottom:10px;">
        <div style="font-size:12px;font-weight:700;color:var(--verde);margin-bottom:8px;">🔄 Tiros de esquina</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <input type="number" id="ma-el" min="0" max="30" value="${el}" ${!abierto?'disabled':''} style="flex:1;text-align:center;font-size:20px;font-weight:700;padding:8px;border:1px solid var(--border);border-radius:8px;"/>
          <span style="color:var(--muted);">–</span>
          <input type="number" id="ma-ev" min="0" max="30" value="${ev}" ${!abierto?'disabled':''} style="flex:1;text-align:center;font-size:20px;font-weight:700;padding:8px;border:1px solid var(--border);border-radius:8px;"/>
        </div>
      </div>` : ''}
      ${abierto ? `<button onclick="guardarApuestaModal('${pid}')"
        style="width:100%;padding:13px;background:var(--verde);color:white;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;margin-top:4px;">
        ${existing ? '✏️ Actualizar apuesta' : '✓ Registrar apuesta'}
      </button>` : ''}
    </div>`;
  modal.style.display = 'flex';
}

async function guardarApuestaModal(pid) {
  const p = PARTIDOS.find(x => x.id === pid);
  if (!p) return;
  if (!estaAbierto(pid, 'grupo')) { toast('⛔ Apuestas cerradas'); return; }
  const cfg = configPartidos[pid] || {};
  const gl  = parseInt(document.getElementById('ma-gl')?.value) || 0;
  const gv  = parseInt(document.getElementById('ma-gv')?.value) || 0;
  const existing = apuestas.find(a => a.uid === currentUser.uid && a.partidoId === pid);
  const data = { golLocal: gl, golVisitante: gv, ts: new Date().toLocaleString('es-CO') };
  if (cfg.tarjetas) {
    data.tarjetasLocal     = parseInt(document.getElementById('ma-tl')?.value) || 0;
    data.tarjetasVisitante = parseInt(document.getElementById('ma-tv')?.value) || 0;
  }
  if (cfg.esquinas) {
    data.esquinasLocal     = parseInt(document.getElementById('ma-el')?.value) || 0;
    data.esquinasVisitante = parseInt(document.getElementById('ma-ev')?.value) || 0;
  }
  try {
    if (existing) {
      await db.collection('apuestas').doc(existing.id).update(data);
      toast('✓ Apuesta actualizada');
    } else {
      await db.collection('apuestas').add({
        numId: Date.now(), uid: currentUser.uid, nombre: currentUser.nombre,
        tipo: 'grupo', local: p.local, visitante: p.visitante,
        partidoId: pid, grupo: p.grupo,
        creado: firebase.firestore.FieldValue.serverTimestamp(), ...data
      });
      toast('✓ Apuesta registrada');
    }
    cerrarModalApuesta();
  } catch(e) { toast('❌ Error: ' + e.message); }
}



// ============================================================
// FUNCIONES ADICIONALES (FEES)
// ============================================================


async function verificarEliminacion() {
  // Si ya se ejecutó la eliminación, no volver a ejecutar
  if (configGlobal.eliminacionEjecutada) return;

  // Usar fechaEliminacion separada del cierre de apuestas
  const fechaElim = configGlobal.fechaEliminacion;
  if (!fechaElim) return; // Solo ejecutar si el admin define esta fecha explícitamente
  if (new Date(fechaElim) > new Date()) return;

  // Calcular ranking actual
  const snapUsers = await db.collection('usuarios').get();
  const snapApuestas = await db.collection('apuestas').get();
  const todasApuestas = snapApuestas.docs.map(d=>({id:d.id,...d.data()}));

  const usuarios = snapUsers.docs.map(d=>({uid:d.id,...d.data()}))
    .filter(u => u.rol !== 'admin');

  const ranking = usuarios.map(u => {
    const bets = todasApuestas.filter(a => a.uid === u.uid);
    const pts  = bets.reduce((s,a) => s + (calcPuntosGrupos(a)||0), 0);
    return { uid: u.uid, nombre: u.nombre, pts };
  }).sort((a,b) => b.pts - a.pts);

  // Eliminar el % configurado por el admin (default 30%)
  const pctElim = (configGlobal.pctEliminacion || 30) / 100;
  const totalEliminar = Math.floor(ranking.length * pctElim);
  if (totalEliminar === 0) return;

  const eliminados = ranking.slice(ranking.length - totalEliminar);
  const batch = db.batch();
  eliminados.forEach(u => {
    batch.update(db.collection('usuarios').doc(u.uid), {
      eliminado: true,
      eliminadoFase: 'grupos',
      ptsGrupos: u.pts
    });
  });
  // Marcar eliminación como ejecutada
  await batch.commit();
  await db.collection('config').doc('global').set(
    { eliminacionEjecutada: true, eliminados: eliminados.map(u=>u.uid) },
    { merge: true }
  );
  console.log('Eliminación ejecutada:', eliminados.length, 'usuarios');
}


function calcPuntosGrupos(a) {
  // Solo cuenta partidos de fase de grupos
  if (!a.partidoId) return 0;
  const letra = a.partidoId[0];
  const grupos = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  if (!grupos.includes(letra)) return 0;
  return calcPuntos(a);
}


async function reiniciarPuntosOctavos() {
  if (!confirm('¿Reiniciar puntos para octavos? Todos los participantes activos comenzarán en 0. Esta acción no se puede deshacer.')) return;

  // Guardar puntos de grupos y resetear
  const snapApuestas = await db.collection('apuestas').get();
  const batch = db.batch();

  snapApuestas.docs.forEach(doc => {
    const a = doc.data();
    // Guardar puntos de grupos
    if (a.puntos > 0) {
      batch.update(db.collection('apuestas').doc(doc.id), {
        puntosGrupos: a.puntos,
        puntos: 0
      });
    }
  });
  await batch.commit();

  // Marcar reinicio en config
  await db.collection('config').doc('global').set(
    { reinicioOctavos: true, fechaReinicio: firebase.firestore.FieldValue.serverTimestamp() },
    { merge: true }
  );

  toast('✓ Puntos reiniciados para octavos');
  renderTabla(); renderApuestas();
}


async function checkEliminadoActual() {
  if (!currentUser || currentUser.rol === 'admin') return;
  const snap = await db.collection('usuarios').doc(currentUser.uid).get();
  if (snap.exists && snap.data().eliminado) {
    currentUser.eliminado = true;
    // Mostrar banner de eliminación
    const banner = document.getElementById('banner-eliminado');
    if (banner) banner.style.display = 'block';
    // Deshabilitar registro de apuestas
    const btnReg = document.getElementById('btn-registrar');
    if (btnReg) { btnReg.disabled = true; btnReg.textContent = '⛔ Eliminado en fase de grupos'; }
  }
}


async function recalcularTodosPuntos() {
  if (!confirm('¿Recalcular puntos de todas las apuestas? Esto puede tardar unos segundos.')) return;
  const btn = event.target;
  btn.disabled = true; btn.textContent = '⏳ Recalculando...';
  try {
    const snap = await db.collection('apuestas').get();
    const batch = db.batch();
    let actualizadas = 0;
    snap.docs.forEach(doc => {
      const a = {id: doc.id, ...doc.data()};
      const pts = calcPuntos(a);
      batch.update(doc.ref, { puntos: pts });
      actualizadas++;
    });
    await batch.commit();
    toast('✓ ' + actualizadas + ' apuestas recalculadas');
    renderTabla(); renderApuestas();
  } catch(e) { toast('❌ Error: ' + e.message); }
  btn.disabled = false; btn.textContent = '🔄 Recalcular puntos';
}


async function exportXLSX(){
  if(!apuestas.length){toast("No hay apuestas");return;}

  const wb = XLSX.utils.book_new();

  // ── Hoja 1: Apuestas detalladas ──
  const hdApuestas = ["#","Participante","Tipo","Partido","Goles Local","Goles Visitante",
    "Campeón/Jugador","Grupo","Fecha registro","Puntos","Tarjetas Local","Tarjetas Visit.","Esquinas Local","Esquinas Visit."];
  const rowsApuestas = apuestas
    .sort((a,b) => a.nombre.localeCompare(b.nombre))
    .map((a,i) => [
      i+1, a.nombre, a.tipo,
      a.local ? a.local+' vs '+a.visitante : '',
      a.golLocal ?? '', a.golVisitante ?? '',
      a.campeon || a.subcampeon || a.tercerPuesto || a.goleador || a.valla || '',
      a.grupo || '', a.ts, calcPuntos(a),
      a.tarjetasLocal ?? '', a.tarjetasVisitante ?? '',
      a.esquinasLocal ?? '', a.esquinasVisitante ?? ''
    ]);
  const wsApuestas = XLSX.utils.aoa_to_sheet([hdApuestas, ...rowsApuestas]);
  wsApuestas['!cols'] = [4,20,14,28,8,8,16,10,18,8,10,10,10,10].map(w=>({wch:w}));
  XLSX.utils.book_append_sheet(wb, wsApuestas, "Apuestas");

  // ── Hoja 2: Tabla de posiciones ──
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  const ranking = personas.map(p => {
    const bets = apuestas.filter(a=>a.nombre===p);
    const fases = calcPuntosPorFase(bets);
    return { nombre:p, total:bets.reduce((s,a)=>s+calcPuntos(a),0), count:bets.length, ...fases };
  }).sort((a,b)=>b.total-a.total);
  const hdRank = ["Pos","Participante","Apuestas","Total Pts","Pts Grupos","Pts Octavos","Pts Cuartos","Pts Semis","Pts Final","Pts Campeón"];
  const rowsRank = ranking.map((r,i)=>[i+1,r.nombre,r.count,r.total,r.grupos||0,r.octavos||0,r.cuartos||0,r.semis||0,r.final||0,r.campeon||0]);
  const wsRank = XLSX.utils.aoa_to_sheet([hdRank, ...rowsRank]);
  wsRank['!cols'] = [4,24,8,10,10,10,10,10,10,10].map(w=>({wch:w}));
  XLSX.utils.book_append_sheet(wb, wsRank, "Posiciones");

  // ── Hoja 3: Usuarios registrados ──
  try {
    await cargarUsuariosCache(); const snapUsers = _cachedUsuarios;
    const hdUsers = ["#","Nombre","Correo","Celular","Rol","Tipo","Apuestas","Puntos"];
    const rowsUsers = snapUsers.map((u,i) => {
      const bets = apuestas.filter(a=>a.uid===u.uid);
      const pts  = bets.reduce((s,a)=>s+calcPuntos(a),0);
      const tipo = u.invitadoPor ? 'Invitado' : 'Asociado';
      return [i+1, u.nombre, u.email, u.celular||'', u.rol, tipo, bets.length, pts];
    });
    const wsUsers = XLSX.utils.aoa_to_sheet([hdUsers, ...rowsUsers]);
    wsUsers['!cols'] = [4,24,28,14,8,10,8,8].map(w=>({wch:w}));
    XLSX.utils.book_append_sheet(wb, wsUsers, "Usuarios");
  } catch(e) { console.error('Error cargando usuarios:', e); }

  XLSX.writeFile(wb, "desafio_mundialista_fees_2026.xlsx");
  toast("✓ Excel exportado con 3 hojas");
}


function renderApuestasPorUsuario() {
  const container = document.getElementById('lista-apuestas-por-usuario');
  if (!container) return;
  const filtroNombre = (document.getElementById('filtro-usr-nombre')?.value || '').toLowerCase();
  const filtroTipo   = document.getElementById('filtro-usr-tipo')?.value || '';
  // Toggle global
  const globalAbierto = configGlobal.apuestasAbiertas;
  const toggleGlobal = document.getElementById('toggle-apertura-global');
  if (toggleGlobal) {
    toggleGlobal.textContent = globalAbierto ? '🔓 Apuestas abiertas (cerrar todo)' : '🔒 Apuestas cerradas (abrir todo)';
    toggleGlobal.style.background = globalAbierto ? '#e8f7ed' : '#fef0f0';
    toggleGlobal.style.color = globalAbierto ? '#1a6b3c' : '#dc2626';
    toggleGlobal.style.borderColor = globalAbierto ? '#a3d9b8' : '#fecaca';
  }

  // Agrupar apuestas por usuario
  const porUsuario = new Map();
  apuestas.forEach(a => {
    if (!a.uid || !a.nombre) return;
    if (filtroTipo && a.tipo !== filtroTipo) return;
    if (!porUsuario.has(a.uid)) porUsuario.set(a.uid, { nombre: a.nombre, bets: [] });
    porUsuario.get(a.uid).bets.push(a);
  });

  // Filtrar por nombre
  const usuarios = [...porUsuario.values()]
    .filter(u => !filtroNombre || u.nombre.toLowerCase().includes(filtroNombre))
    .sort((a,b) => a.nombre.localeCompare(b.nombre));

  if (!usuarios.length) {
    container.innerHTML = '<div class="empty" style="padding:24px;">Sin resultados</div>';
    return;
  }

  container.innerHTML = usuarios.map(u => {
    const pts = u.bets.reduce((s,a) => s + calcPuntos(a), 0);
    const ini = u.nombre.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();

    const baldosas = u.bets.map(a => {
      const p = calcPuntos(a);
      const res = resultados[a.partidoId] || {};
      const tieneResultado = a.partidoId && res.local !== undefined;
      const acerto = p > 0;
      let titulo = '', detalle = '', desempateHtml = '';

      if (a.tipo === 'grupo') {
        const partido = PARTIDOS.find(x => x.id === a.partidoId);
        titulo = partido ? `${partido.local} vs ${partido.visitante}` : (a.local + ' vs ' + a.visitante);
        detalle = `${a.golLocal ?? '?'} – ${a.golVisitante ?? '?'}`;
        if (tieneResultado) detalle += ` <span style="color:var(--muted);font-size:10px;">(${res.local}-${res.visitante})</span>`;
        // Desempate
        if (a.tarjetasLocal !== undefined)
          desempateHtml += `<span style="font-size:10px;background:#fdf3dc;color:#c8972b;padding:1px 5px;border-radius:6px;margin-right:3px;">🟨 ${a.tarjetasLocal}–${a.tarjetasVisitante}</span>`;
        if (a.esquinasLocal !== undefined)
          desempateHtml += `<span style="font-size:10px;background:#e8eef7;color:var(--verde);padding:1px 5px;border-radius:6px;">🔄 ${a.esquinasLocal}–${a.esquinasVisitante}</span>`;
      } else if (a.tipo === 'campeon')       { titulo = '🏆 Campeón';    detalle = a.campeon || a.equipoElegido || '—'; }
      else if (a.tipo === 'subcampeon')      { titulo = '🥈 Subcampeón'; detalle = a.subcampeon || a.equipoElegido || '—'; }
      else if (a.tipo === 'tercer_puesto')   { titulo = '🥉 3er Puesto'; detalle = a.tercerPuesto || a.equipoElegido || '—'; }
      else if (a.tipo === 'goleador')        { titulo = '⚽ Goleador';   detalle = (a.goleador || a.equipoElegido || '—') + (a.golesGoleador !== undefined ? ` (${a.golesGoleador}g)` : ''); }
      else if (a.tipo === 'valla')           { titulo = '🧤 Valla';      detalle = (a.valla || a.equipoElegido || '—') + (a.golesValla !== undefined ? ` (${a.golesValla}g)` : ''); }

      const bg = tieneResultado ? (acerto ? '#e8f7ed' : '#fef0f0') : 'var(--bg)';
      const border = tieneResultado ? (acerto ? '#a3d9b8' : '#fecaca') : 'var(--border)';
      const fechaReg = a.ts ? a.ts.toString().slice(0,16) : '';
      return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:8px 10px;min-width:110px;max-width:140px;flex:0 0 auto;">
        <div style="font-size:10px;color:var(--muted);font-weight:600;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${titulo}">${titulo}</div>
        <div style="font-size:14px;font-weight:700;color:var(--verde);">${detalle}</div>
        ${desempateHtml ? `<div style="margin-top:4px;">${desempateHtml}</div>` : ''}
        ${p > 0 ? `<div style="font-size:10px;color:#1a6b3c;font-weight:700;margin-top:4px;">+${p} pts</div>` : ''}
        ${fechaReg ? `<div style="font-size:9px;color:var(--muted);margin-top:3px;">📅 ${fechaReg}</div>` : ''}
      </div>`;
    }).join('');

    return `<div style="border:1px solid var(--border);border-radius:12px;padding:12px 14px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--verde);color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${ini}</div>
        <div style="flex:1;font-weight:600;font-size:14px;">${u.nombre}</div>
        <div style="font-size:13px;font-weight:700;color:var(--verde);margin-right:6px;">${pts} pts</div>
        <button onclick="toggleAperturaUsuario('${u.uid}','${u.nombre.replace(/'/g,"\'")}')" 
          style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid var(--border);cursor:pointer;background:var(--bg);color:var(--muted);" 
          title="Abrir/cerrar apuestas para este usuario">🔓/🔒</button>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">${baldosas}</div>
    </div>`;
  }).join('');
}


async function toggleAperturaGlobal() {
  const abierto = configGlobal.apuestasAbiertas;
  await db.collection('config').doc('global').update({ apuestasAbiertas: !abierto });
  configGlobal.apuestasAbiertas = !abierto;
  toast(abierto ? '🔒 Apuestas cerradas globalmente' : '🔓 Apuestas abiertas globalmente');
  renderApuestasPorUsuario();
}


async function toggleAperturaUsuario(uid, nombre) {
  const snap = await db.collection('usuarios').doc(uid).get();
  const actual = snap.data()?.apuestasAbiertas || false;
  await db.collection('usuarios').doc(uid).update({ apuestasAbiertas: !actual });
  toast(!actual ? `🔓 Apuestas abiertas para ${nombre}` : `🔒 Apuestas cerradas para ${nombre}`);
  renderApuestasPorUsuario();
}


async function savePctEliminacion() {
  const pct = parseInt(document.getElementById('pct-eliminacion')?.value || '30');
  await db.collection('config').doc('global').set({ pctEliminacion: pct }, { merge: true });
  toast('✓ Porcentaje guardado: ' + pct + '%');
}

async function saveFechaEliminacion() {
  const fecha = document.getElementById('fecha-eliminacion')?.value || '';
  const pct   = parseInt(document.getElementById('pct-eliminacion')?.value || '30');
  configGlobal.fechaEliminacion = fecha;
  await db.collection('config').doc('global').set({ fechaEliminacion: fecha, pctEliminacion: pct }, { merge: true });
  toast('✓ Fecha de eliminación guardada');
}


async function guardarDesempate(pid) {
  if (!currentUser || currentUser.rol !== 'admin') return;
  const cfg = configPartidos[pid] || {};
  const update = { ts: firebase.firestore.FieldValue.serverTimestamp() };
  if (cfg.tarjetas) {
    update.tarjetasLocal     = parseInt(document.getElementById("r-tl-"+pid)?.value)||0;
    update.tarjetasVisitante = parseInt(document.getElementById("r-tv-"+pid)?.value)||0;
  }
  if (cfg.esquinas) {
    update.esquinasLocal     = parseInt(document.getElementById("r-el-"+pid)?.value)||0;
    update.esquinasVisitante = parseInt(document.getElementById("r-ev-"+pid)?.value)||0;
  }
  // Merge para no sobreescribir goles
  await db.collection("resultados").doc(pid).set(update, { merge: true });
  resultados[pid] = { ...resultados[pid], ...update };
  toast("✓ Desempate guardado");
  renderResultados(); renderTabla();
}


function actualizarOpcionesFinal() {
  const select = document.getElementById('inp-tipo');
  if (!select) return;
  const habilitarFinal = configGlobal.habilitarFinal || currentUser.rol === 'admin';
  const finales = ['campeon','subcampeon','tercer_puesto'];

  finales.forEach(val => {
    const existing = select.querySelector(`option[value="${val}"]`);
    if (habilitarFinal && !existing) {
      // Agregar opción si no existe
      const labels = {campeon:'Campeón del mundial', subcampeon:'Subcampeón del mundial', tercer_puesto:'Tercer puesto del mundial'};
      const opt = document.createElement('option');
      opt.value = val;
      opt.textContent = labels[val];
      select.appendChild(opt);
    } else if (!habilitarFinal && existing) {
      // Remover opción si existe
      existing.remove();
      // Si era la seleccionada, cambiar a la primera disponible
      if (select.value === val || !select.value) {
        select.value = select.options[0]?.value || 'goleador';
        updateTipo();
      }
    }
  });
}


async function toggleHabilitarFinal() {
  configGlobal.habilitarFinal = !configGlobal.habilitarFinal;
  await db.collection('config').doc('global').set({ habilitarFinal: configGlobal.habilitarFinal }, { merge: true });
  const estado = configGlobal.habilitarFinal ? 'habilitadas' : 'ocultas';
  toast('✓ Apuestas de fase final ' + estado);
  actualizarOpcionesFinal();
  loadCierreGlobalUI();
}


async function saveCierreGoleadorValla() {
  const cg = document.getElementById('cierre-goleador')?.value || '';
  const cv = document.getElementById('cierre-valla')?.value    || '';
  configGlobal.cierreGoleador = cg;
  configGlobal.cierreValla    = cv;
  await db.collection('config').doc('global').set(configGlobal, {merge:true});
  toast('✓ Cierre guardado');
}


function estaAbiertoEspecial(tipo) {
  const ahora = new Date();
  if (tipo === 'goleador' && configGlobal.cierreGoleador)
    return new Date(configGlobal.cierreGoleador) > ahora;
  if (tipo === 'valla' && configGlobal.cierreValla)
    return new Date(configGlobal.cierreValla) > ahora;
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  verificarAutorizacion();
  init();
  updateTipo();
  // Fallback: si onAuthStateChanged no responde en 6s, mostrar login
  setTimeout(() => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay && overlay.style.display !== 'none') {
      console.warn('Firebase timeout — mostrando login');
      overlay.style.display = 'none';
      document.getElementById('auth-overlay').style.display = 'flex';
      setTimeout(verificarInvitacion, 200);
    }
  }, 6000);
});