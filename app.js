// FIREBASE CONFIG - inicializado en el bloque de scripts del head

// CONSTANTES
const ADMIN_EMAIL        = "lopetego@gmail.com";
const API_KEY_FOOTBALL   = "8ccb25f8512b4cc51e437eae1b0edca7";
const EMAILJS_SERVICE_ID = "service_l5i5rnn";
const EMAILJS_TEMPLATE   = "template_cyfytje";

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
];

const EQUIPOS = [...new Set(PARTIDOS.flatMap(p=>[p.local,p.visitante]))].sort();
const GRUPOS  = [...new Set(PARTIDOS.map(p=>p.grupo))];
const FECHAS  = [...new Set(PARTIDOS.map(p=>p.fecha))];

// ESTADO
let currentUser = null;
let apuestas    = [];
let resultados  = {};
let nextId      = 1;
let unsubApuestas = null;

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

function estaAbierto(partidoId, tipo) {
  const cfg = configPartidos[partidoId];
  const ahora = new Date();
  // Cierre individual del partido
  if (cfg && cfg.cierreISO) return new Date(cfg.cierreISO) > ahora;
  // Cierre global por tipo
  const cierreGlobal = tipo === 'grupo' ? configGlobal.cierreGrupos : configGlobal.cierreElim;
  if (cierreGlobal) return new Date(cierreGlobal) > ahora;
  return true; // sin cierre configurado = abierto
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
    // Cargar perfil de Firestore
    const snap = await db.collection("usuarios").doc(user.uid).get();
    const perfil = snap.exists ? snap.data() : {};
    currentUser = {
      uid:         user.uid,
      email:       user.email,
      nombre:      perfil.nombre || user.email,
      celular:     perfil.celular || "",
      rol:         perfil.rol || "user",
      invitadoPor: perfil.invitadoPor || null
    };
    showApp();
  } else {
    currentUser = null;
    showAuth();
  }
});

let unsubUserProfile = null;

function showApp() {
  document.getElementById("auth-overlay").style.display  = "none";
  document.getElementById("main-header").style.display   = "";
  document.getElementById("main-nav").style.display      = "";
  document.getElementById("main-content").style.display  = "";
  actualizarHeaderUsuario();
  renderPtsInfo();
  // Cargar config de partidos temprano para que los campos de desempate aparezcan
  cargarConfigPartidos().then(() => renderPartidos());
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
  const email = document.getElementById("l-email").value.trim();
  const pass  = document.getElementById("l-pass").value;
  if (!email||!pass) { showAuthErr("Completa todos los campos"); return; }
  setBtnLoad("btn-login", true, "Ingresar →");
  try {
    await auth.signInWithEmailAndPassword(email, pass);
  } catch(e) {
    const msgs = {
      "auth/user-not-found":  "Correo no registrado",
      "auth/wrong-password":  "Contraseña incorrecta",
      "auth/invalid-email":   "Correo inválido",
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
  const email = document.getElementById("reset-email").value.trim();
  if (!email) { showAuthErr("Ingresa tu correo"); return; }
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
  if(id==="partidos")  renderPartidos();
  if(id==="admin")     { adminSubTab('usuarios'); }
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
  if (tipo === "campeon" || tipo === "subcampeon" || tipo === "tercer_puesto") {
    const label = tipo === "campeon" ? "campeón" : tipo === "subcampeon" ? "subcampeón" : "tercer puesto";
    const c = document.getElementById("inp-campeon").value.trim();
    if (!c) { toast("⚠ Ingresa el equipo " + label); return; }
    a.equipoElegido = c;
    if (tipo === "campeon")      a.campeon     = c;
    if (tipo === "subcampeon")   a.subcampeon  = c;
    if (tipo === "tercer_puesto") a.tercerPuesto = c;
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
    await db.collection("apuestas").add(a);
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
  const fechas = [...new Set(lista.map(p=>p.fecha))];
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
function renderApuestas() {
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  const grupos   = [...new Set(apuestas.filter(a=>a.grupo).map(a=>a.grupo))];
  const filP = document.getElementById("fil-persona");
  const filG = document.getElementById("fil-grupo-a");
  const curP = filP.value, curG = filG.value;
  filP.innerHTML = '<option value="">Todos los participantes</option>'+personas.map(p=>`<option${p===curP?" selected":""}>${p}</option>`).join("");
  filG.innerHTML = '<option value="">Todos los grupos</option>'+grupos.map(g=>`<option${g===curG?" selected":""}>${g}</option>`).join("");
  const fT=document.getElementById("fil-tipo").value, fP=filP.value, fG2=filG.value;
  let lista = apuestas.filter(a=>(!fT||a.tipo===fT)&&(!fP||a.nombre===fP)&&(!fG2||a.grupo===fG2));
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
      {id:'campeon',      label:'Campeón',      icon:'🏆', field:'campeon'},
      {id:'subcampeon',   label:'Subcampeón',   icon:'🥈', field:'subcampeon'},
      {id:'tercer_puesto',label:'Tercer puesto', icon:'🥉', field:'tercerPuesto'},
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
  const fechas = [...new Set(lista.map(p=>p.fecha))];
  container.innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div class="fecha-bloque">
      <div class="fecha-header"><div class="fecha-badge">📅 ${f}</div><div class="fecha-line"></div></div>
      ${ps.map(p => {
        const r = resultados[p.id];
        const n = apuestas.filter(a=>a.partidoId===p.id).length;
        const cfg = configPartidos[p.id] || {};
        if(r) return `<div class="res-card">
          <div class="res-match">${p.grupo} · ${p.local} vs ${p.visitante}</div>
          <div class="res-form"><span style="font-weight:600;">${p.local}</span><div class="res-done">${r.local} – ${r.visitante}</div><span style="font-weight:600;">${p.visitante}</span>
          <button class="btn btn-outline btn-sm" onclick="borrarResultado('${p.id}')" style="margin-left:auto;">✕</button></div>
          ${cfg.tarjetas ? `<div style="font-size:12px;color:var(--muted);margin-top:4px;">🟨 Tarjetas: ${r.tarjetasLocal||0}–${r.tarjetasVisitante||0}</div>` : ''}
          ${cfg.esquinas ? `<div style="font-size:12px;color:var(--muted);margin-top:2px;">🔄 Esquinas: ${r.esquinasLocal||0}–${r.esquinasVisitante||0}</div>` : ''}
          <div style="font-size:12px;color:var(--muted);margin-top:6px;">${n} apuesta(s)</div></div>`;
        return `<div class="res-card">
          <div class="res-match">${p.grupo} · ${p.local} vs ${p.visitante}</div>
          <div class="res-form">
            <span style="font-weight:600;font-size:13px;">${p.local}</span>
            <input type="number" id="r-l-${p.id}" min="0" max="20" value="0"/>
            <span style="color:var(--muted);">vs</span>
            <input type="number" id="r-v-${p.id}" min="0" max="20" value="0"/>
            <span style="font-weight:600;font-size:13px;">${p.visitante}</span>
            <button class="btn btn-primary btn-sm" onclick="guardarResultado('${p.id}')" style="margin-left:auto;">Guardar</button>
          </div>
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
async function cargarResultados() {
  const snap = await db.collection("resultados").get();
  snap.forEach(doc => { resultados[doc.id] = doc.data(); });
  await cargarConfigPartidos();
  await cargarTextos();
  await cargarCriterios();
  renderPartidos(); renderResultados();
}

// RENDER TABLA
function renderTabla() {
  document.getElementById("st-total").textContent    = apuestas.length;
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  document.getElementById("st-partic").textContent   = personas.length;
  document.getElementById("st-partidos").textContent = new Set(apuestas.filter(a=>a.partidoId).map(a=>a.partidoId)).size;
  const container = document.getElementById("tabla-ranking");
  if (!personas.length) { container.innerHTML='<div class="empty" style="padding:24px">Sin participantes aún</div>'; return; }
  const ranking = personas.map(p => {
    const bets = apuestas.filter(a=>a.nombre===p);
    const fases = calcPuntosPorFase(bets);
    const total = bets.reduce((s,a)=>s+calcPuntos(a),0);
    return {nombre:p, pts:total, count:bets.length, fases, ini:p.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()};
  }).sort((a,b)=>b.pts-a.pts||b.count-a.count);
  const colors = ["var(--oro)","#adb5bd","#cd7f32"];
  container.innerHTML = ranking.map((r,i) => {
    const faseBadges = Object.entries(r.fases)
      .filter(([,v])=>v>0)
      .map(([k,v])=>{
        const labels = {grupos:'Grupos',octavos:'Octavos',cuartos:'Cuartos',semis:'Semis',final:'Final',campeon:'Campeón'};
        const icons  = {grupos:'⚽',octavos:'🔁',cuartos:'🏅',semis:'🌟',final:'🏆',campeon:'👑'};
        return `<span style="font-size:10px;background:var(--verde-light);color:var(--verde);padding:2px 7px;border-radius:8px;margin-right:3px;">${icons[k]||''} ${labels[k]||k}: <strong>${v}</strong></span>`;
      }).join('');
    return `<div class="rank-row" style="flex-wrap:wrap;">
      <div class="rank-pos${i<3?" top":""}">${i+1}</div>
      <div style="width:38px;height:38px;border-radius:50%;background:${colors[i]||"var(--verde)"};color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${r.ini}</div>
      <div class="rank-name" style="flex:1;">
        ${i===0?"🥇 ":i===1?"🥈 ":i===2?"🥉 ":""}${r.nombre}
        <div class="rank-sub">${r.count} apuesta${r.count!==1?"s":""}</div>
        ${faseBadges ? `<div style="margin-top:5px;flex-wrap:wrap;display:flex;gap:3px;">${faseBadges}</div>` : ''}
      </div>
      <div><div class="rank-pts">${r.pts}</div><div class="pts-lbl">puntos</div></div>
    </div>`;
  }).join("");
}

// PUNTUACIÓN CONFIGURABLE
function renderPtsInfo() {
  const el = document.getElementById("pts-info-text");
  if(el) el.innerHTML = criterios.map(c=>`${c.icon} ${c.nombre} = <strong>${c.pts} pts</strong>`).join(" · ");
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
  ["usuarios","puntos","config","textos"].forEach(t => {
    document.getElementById("admin-panel-"+t).style.display = tab===t?"block":"none";
    const base = "flex:1;padding:10px 8px;font-size:11px;font-weight:600;border:none;background:none;cursor:pointer;white-space:nowrap;border-bottom:2px solid ";
    const el = document.getElementById("asubt-"+t);
    if(el) el.style.cssText = base+(tab===t?"var(--verde);color:var(--verde);":"transparent;color:var(--muted);");
  });
  if(tab==="puntos")  renderCriterios();
  if(tab==="config")  { renderConfigPartidos(); initConfigFiltros(); loadCierreGlobalUI(); }
  if(tab==="textos")  renderTextos();
  if(tab==="usuarios")renderUsuarios();
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
  const fechas = [...new Set(lista.map(p=>p.fecha))];
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

async function renderUsuarios() {
  const container = document.getElementById("lista-usuarios");
  container.innerHTML = '<div class="empty">Cargando...</div>';
  try {
    const snap = await db.collection("usuarios").get();
    if (snap.empty) { container.innerHTML='<div class="empty"><div class="empty-ico">👥</div>No hay usuarios</div>'; return; }
    const users = snap.docs.map(d=>({uid:d.id,...d.data()}));

    // Cargar TODAS las apuestas para calcular quiénes han apostado
    const snapAp = await db.collection("apuestas").get();
    const conApuestas = new Set(snapAp.docs.map(d=>d.data().uid));

    // Botón de recordatorio masivo
    const sinApostar = users.filter(u=>!conApuestas.has(u.uid));
    const btnRecordatorio = sinApostar.length > 0
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
        const ini = u.nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
        const isMe = u.uid===currentUser.uid;
        const tieneApuesta = conApuestas.has(u.uid);
        const isAdmin = u.rol==="admin";
        return `<div class="user-row">
          <div style="width:38px;height:38px;border-radius:50%;background:${isAdmin?"var(--oro)":"var(--verde)"};color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${ini}</div>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:14px;">${u.nombre}${isAdmin?'<span class="admin-badge">Admin</span>':''}
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
              <button class="btn btn-danger btn-sm" onclick="eliminarUsuario('${u.uid}','${u.nombre}')" title="Eliminar">🗑</button>
            `:'<span style="font-size:11px;color:var(--muted);">Tú</span>'}
          </div>
        </div>`;
      }).join("")}
    </div>`;
  } catch(e) { container.innerHTML='<div class="empty">Error al cargar usuarios: '+e.message+'</div>'; }
  // Load invitations
  renderLinksInvitacion();
}

async function toggleAdmin(uid, nombre, rolActual) {
  const nuevoRol = rolActual === "admin" ? "user" : "admin";
  const accion   = nuevoRol === "admin" ? "hacer admin" : "quitar rol de admin";
  if (!confirm(`¿Quieres ${accion} a ${nombre}?`)) return;
  try {
    await db.collection("usuarios").doc(uid).update({ rol: nuevoRol });
    toast(`✓ ${nombre} ahora es ${nuevoRol === "admin" ? "administrador" : "participante"}`);
    renderUsuarios();
  } catch(e) { toast("Error: " + e.message); }
}

async function eliminarUsuario(uid, nombre) {
  if(!confirm(`¿Eliminar a ${nombre}? Sus apuestas se mantendrán.`)) return;
  await db.collection("usuarios").doc(uid).delete();
  toast("Usuario eliminado"); renderUsuarios();
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
  const snap = await db.collection("usuarios").get();
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
  const snap = await db.collection("usuarios").get();
  const conApuestas = new Set(apuestas.map(a=>a.uid));
  const sinApostar = snap.docs.map(d=>({uid:d.id,...d.data()})).filter(u=>!conApuestas.has(u.uid));
  const lista = sinApostar.map(u=>`• ${u.nombre} (${u.celular||u.email})`).join(' ');

  navigator.clipboard.writeText('Usuarios sin apuestas:\n' + lista);
  toast(`📋 Lista copiada (${sinApostar.length} usuarios)`);
}

// SYNC API-FOOTBALL
const TEAM_MAP = {"México":"Mexico","Sudáfrica":"South Africa","Corea del Sur":"South Korea","Rep. Checa":"Czech Republic","Canadá":"Canada","Bosnia y Herz.":"Bosnia","Qatar":"Qatar","Suiza":"Switzerland","Brasil":"Brazil","Marruecos":"Morocco","Haití":"Haiti","Escocia":"Scotland","Estados Unidos":"USA","Australia":"Australia","Turquía":"Turkey","Paraguay":"Paraguay","Alemania":"Germany","Curazao":"Curacao","Costa de Marfil":"Ivory Coast","Ecuador":"Ecuador","Países Bajos":"Netherlands","Japón":"Japan","Suecia":"Sweden","Túnez":"Tunisia","Bélgica":"Belgium","Egipto":"Egypt","Irán":"Iran","Nueva Zelanda":"New Zealand","España":"Spain","Cabo Verde":"Cape Verde","Uruguay":"Uruguay","Arabia Saudita":"Saudi Arabia","Francia":"France","Senegal":"Senegal","Noruega":"Norway","Irak":"Iraq","Argentina":"Argentina","Argelia":"Algeria","Austria":"Austria","Jordania":"Jordan","Portugal":"Portugal","Rep. Dem. Congo":"DR Congo","Colombia":"Colombia","Uzbekistán":"Uzbekistan","Inglaterra":"England","Croacia":"Croatia","Ghana":"Ghana","Panamá":"Panama"};

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
  showSyncMsg("Consultando API-Football...","info");
  try {
    const res = await fetch(`https://v3.football.api-sports.io/fixtures?league=1&season=2026&status=FT`,{
      headers:{"x-apisports-key":API_KEY_FOOTBALL}
    });
    const data = await res.json();
    if(!data.response||!data.response.length){showSyncMsg("⚠ No hay partidos finalizados aún","info");btn.disabled=false;btn.textContent="🔄 Sincronizar API";return;}
    let actualizados=0;
    const batch = db.batch();
    data.response.forEach(f=>{
      const partido=PARTIDOS.find(p=>{const lm=TEAM_MAP[p.local]||p.local,vm=TEAM_MAP[p.visitante]||p.visitante;return(lm===f.teams.home.name&&vm===f.teams.away.name)||(lm===f.teams.away.name&&vm===f.teams.home.name);});
      if(partido&&f.goals.home!==null){
        const lm=TEAM_MAP[partido.local]||partido.local;
        const r=lm===f.teams.home.name?{local:f.goals.home,visitante:f.goals.away}:{local:f.goals.away,visitante:f.goals.home};
        resultados[partido.id]=r;
        batch.set(db.collection("resultados").doc(partido.id),{...r,ts:firebase.firestore.FieldValue.serverTimestamp()});
        actualizados++;
      }
    });
    await batch.commit();
    // Recalcular puntos
    const batchPts=db.batch();
    apuestas.forEach(a=>{if(a.partidoId&&resultados[a.partidoId])batchPts.update(db.collection("apuestas").doc(a.id),{puntos:calcPuntos(a)});});
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
  container.innerHTML = `
    <div style="margin-top:14px;">
      <div style="font-size:13px;font-weight:600;color:var(--verde);margin-bottom:8px;">
        ✓ ${usuarios.length} usuario(s) encontrado(s)
      </div>
      <div style="max-height:200px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;margin-bottom:12px;">
        ${usuarios.map(u=>`
          <div style="padding:8px 12px;border-bottom:1px solid var(--border);font-size:13px;display:flex;gap:8px;">
            <span style="flex:1;font-weight:500;">${u.nombre||'—'}</span>
            <span style="color:var(--muted);">${u.celular||''}</span>
            <span style="color:var(--verde);">${u.correo}</span>
          </div>`).join('')}
      </div>
      <div style="margin-bottom:12px;">
        <label style="display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:5px;text-transform:uppercase;">Contraseña temporal para todos</label>
        <input type="text" id="cargue-pass-temp" value="Polla2026" style="width:200px;padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:14px;"/>
      </div>
      <div style="background:var(--verde-light);border:1px solid #a3d9b8;border-radius:8px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--verde);">
        ✉️ Se enviar&aacute; una invitaci&oacute;n por correo a cada persona con su link personal &uacute;nico.
      </div>
      <button class="btn btn-primary" onclick="ejecutarCargue(${JSON.stringify(usuarios).replace(/"/g,'&quot;')})" style="width:auto;padding:10px 20px;">
        &#9993; Enviar ${usuarios.length} invitaci&oacute;n(es)
      </button>
    </div>`;
}

async function ejecutarCargue(usuarios) {
  const btn = event.target;
  btn.disabled = true;
  let ok = 0, err = 0;

  btn.textContent = 'Enviando invitaciones...';
  for (const u of usuarios) {
    try {
      // Cargue masivo: generar link SIN marcar como invitado
      const token  = 'inv_' + Date.now() + '_' + Math.random().toString(36).substr(2,8);
      const base   = window.location.origin + window.location.pathname;
      const ref    = btoa(currentUser.uid + '|' + currentUser.nombre + '|' + token);
      const link   = base + '?ref=' + ref;
      // Guardar invitacion sin invitadoPor para que no marque como invitado
      await db.collection('invitaciones').doc(token).set({
        token,
        creadoPor:        currentUser.uid,
        creadoPorNombre:  currentUser.nombre,
        correoDestino:    u.correo || '',
        nombreDestino:    u.nombre || '',
        usado:            false,
        esCargue:         true,
        creado:           firebase.firestore.FieldValue.serverTimestamp()
      });
      // Enviar correo
      if (u.correo) await enviarCorreoInvitacion(u.correo, u.nombre, link);
      ok++;
    } catch(e) {
      console.error('Error invitando ' + u.correo + ':', e.message);
      err++;
    }
    btn.textContent = 'Enviando... ' + ok + '/' + usuarios.length;
  }

  toast('\u2713 ' + ok + ' invitaci\u00F3n(es) enviada(s)' + (err ? ' \u00B7 ' + err + ' errores' : ''));
  btn.disabled = false;
  cerrarCargueUsuarios();
  renderUsuarios();
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
    'Hola! Te invitamos a participar en la Polla Mundialista FEES 2026 \u26BD\n\n' +
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
    'Te invitamos a participar en la Polla Mundialista FEES 2026 \u26BD\n\n' +
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
  app_titulo:       'Polla Mundialista FEES 2026',
  app_subtitulo:    'Estados Unidos · México · Canadá · 11 Jun – 19 Jul',
  app_slogan:       '¡Demuestra que sabes de fútbol!',
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
    // Header
    'hdr-titulo':        textos.app_titulo,
    'hdr-subtitulo':     textos.app_subtitulo,
    'header-slogan':     textos.app_slogan,
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
    if (el && val) el.textContent = val;
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

document.addEventListener('DOMContentLoaded', () => {
  init();
  updateTipo();
  cargarResultados();
  verificarInvitacion();
  // Fallback: si onAuthStateChanged no responde en 6s, mostrar login
  setTimeout(() => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay && overlay.style.display !== 'none') {
      console.warn('Firebase timeout — mostrando login');
      overlay.style.display = 'none';
      document.getElementById('auth-overlay').style.display = 'flex';
    }
  }, 6000);
});