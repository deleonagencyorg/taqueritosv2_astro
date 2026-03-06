# DIAGRAMA VISUAL DEL PROBLEMA Y SOLUCIÓN

## 📊 ANTES (Con Error 500)

```
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL (PRODUCCIÓN)                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. Usuario accede a taqueritos.com/es                       │
│                  ↓                                            │
│  2. Astro inicia middleware                                  │
│     └─ Intenta cargar routesConfig ❌                        │
│        (Sin try-catch, colapsa aquí)                         │
│                  ↓                                            │
│  3. Se carga MainLayout.astro                                │
│     └─ Intenta acceder a variables de entorno               │
│        PUBLIC_API_HOST ❌ (undefined en Vercel)              │
│        PUBLIC_API_TOKEN ❌ (undefined en Vercel)             │
│                  ↓                                            │
│  4. Se carga componente GoogleTagManager                      │
│     └─ Intenta PUBLIC_GTM_ID ❌ (undefined)                  │
│                  ↓                                            │
│  5. getSiteConfig() se ejecuta                               │
│     └─ Intenta hacer fetch a undefined URL ❌                │
│        fetch("undefined/api/site-setting?populate=*")        │
│                  ↓                                            │
│  💥 ERROR 500: FUNCTION_INVOCATION_FAILED                   │
│     ↓ ↓ ↓                                                    │
│  "This Serverless Function has crashed."                     │
│                                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              LOCAL (FUNCIONA CORRECTAMENTE)                  │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. Variables de entorno están en .env.local ✅              │
│  2. PUBLIC_API_HOST = "https://api-cms.com" ✅              │
│  3. PUBLIC_API_TOKEN = "token_secreto" ✅                   │
│                  ↓                                            │
│  4. fetch("https://api-cms.com/api/...") ✅                │
│  5. Respuesta correcta ✅                                    │
│  6. Página renderiza perfectamente ✅                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 DESPUÉS (Reparado)

```
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL (PRODUCCIÓN)                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. Usuario accede a taqueritos.com/es                       │
│                  ↓                                            │
│  2. astro.config.mjs lee variables de entorno               │
│     └─ process.env.SITE_URL ✅ (correcto en Vercel)         │
│                  ↓                                            │
│  3. Middleware se ejecuta dentro de try-catch               │
│     └─ Si falla, continúa sin bloquear ✅                   │
│                  ↓                                            │
│  4. env.ts centraliza TODAS las variables                   │
│     ├─ PUBLIC_API_HOST = "https://api-cms.com" ✅           │
│     ├─ PUBLIC_API_TOKEN = "token_aqui" ✅                   │
│     ├─ PUBLIC_CONTACT_API_HOST = "..." ✅                   │
│     └─ Con fallbacks automáticos ✅                          │
│                  ↓                                            │
│  5. Componentes importan desde env.ts                       │
│     ├─ GoogleTagManager ✅ (tiene valor seguro)            │
│     ├─ Subscribe ✅ (valida antes de usar)                 │
│     └─ Otros componentes ✅                                 │
│                  ↓                                            │
│  6. getParticipations() valida antes de usar               │
│     ├─ if (!PUBLIC_API_HOST) throw error ✅                │
│     ├─ if (!PUBLIC_API_TOKEN) throw error ✅               │
│     └─ Luego hace fetch seguro ✅                          │
│                  ↓                                            │
│  7. API endpoints validan configuración                      │
│     ├─ /api/creators/participations ✅                      │
│     ├─ /api/geo-headers ✅ (con fallback)                   │
│     └─ /api/detect-locale ✅ (con fallback)                │
│                  ↓                                            │
│  ✅ PÁGINA FUNCIONA CORRECTAMENTE                           │
│                                                               │
│  Logs en Vercel:                                             │
│  [Middleware] processing request for /es/products ✅         │
│  [API/creators/participations] Fetching: {...} ✅            │
│  Status: 200 OK ✅                                           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 FLUJO DE VARIABLES DE ENTORNO

### ANTES (Problemático)
```
import.meta.env
     ↓
getCmsContent.ts (PUBLIC_API_HOST) ❌ undefined
     ↓
participationService.ts (PUBLIC_API_TOKEN) ❌ undefined
     ↓
GoogleTagManager.astro (PUBLIC_GTM_ID) ❌ undefined
     ↓
cada archivo tenía su propio import directo
     ↓
❌ Inconsistencia, confusión, errores
```

### DESPUÉS (Correcto)
```
process.env / import.meta.env (Vercel)
     ↓
┌─────────────────────────────────────┐
│   src/config/env.ts (CENTRALIZADO)  │
│  • PUBLIC_API_HOST                  │
│  • PUBLIC_API_TOKEN                 │
│  • PUBLIC_CONTACT_API_HOST          │
│  • PUBLIC_CONTACT_API_TOKEN         │
│  • PUBLIC_GTM_ID                    │
│  • Etc. (con fallbacks)             │
└─────────────────────────────────────┘
     ↓
Todos los archivos importan desde aquí:
  • getCmsContent.ts ✅
  • participationService.ts ✅
  • GoogleTagManager.astro ✅
  • componentes ✅
  • APIs ✅
     ↓
✅ Una sola fuente de verdad
✅ Fallbacks automáticos
✅ Fácil de mantener
```

---

## 📈 COMPARACIÓN DE MANEJO DE ERRORES

### ANTES (Sin Manejo)
```
getParticipations()
  ├─ if (!API_HOST) → throw error ❌
  ├─ if (!API_TOKEN) → throw error ❌
  └─ fetch(url) → collapsa si URL está mal ❌
       ↓
   UNHANDLED EXCEPTION
       ↓
   500 ERROR
```

### DESPUÉS (Con Manejo)
```
getSiteConfig()
  ├─ if (!PUBLIC_API_HOST) → log error + throw ✅
  ├─ if (!PUBLIC_API_TOKEN) → log error + throw ✅
  ├─ try {
  │   fetch(url) ✅
  │ }
  └─ catch (error) {
       console.error('...') ✅
       return fallback ✅
     }
       ↓
   Respuesta completa (nunca 500)
       ↓
   Cliente maneja gracefully
```

---

## 🌐 FLUJO COMPLETO DE UN REQUEST

### LOCAL (Funciona)
```
Browser
  ↓
next build (npm run dev)
  ↓
.env.local (variables configuradas)
  ↓
Astro dev server
  ├─ Middleware: OK ✅
  ├─ env.ts: vars cargadas ✅
  ├─ API calls: OK ✅
  └─ Página renderiza: OK ✅
  ↓
Browser muestra página: ✅
```

### VERCEL (Antes - Con Error)
```
Browser
  ↓
push a GitHub
  ↓
Vercel detecta cambios
  ├─ Build inicia
  ├─ .env.local NO se sube (correctamente)
  ├─ Vercel ENV VARS no configuradas ❌
  │
  ├─ astro build
  │   ├─ import.meta.env.SITE_URL → undefined ❌
  │   ├─ Pero continúa (no falla en build)
  │   └─ Output: código que falla en runtime
  │
  ├─ Deploy a Vercel
  ├─ GET /es
  │   ├─ Middleware: sin try-catch → error ❌
  │   ├─ Componentes: vars undefined ❌
  │   ├─ fetch("undefined/api/...") → error ❌
  │   └─ Error no capturado
  │
  └─ Vercel devuelve: 500 ❌
      ↓
Browser muestra: "Serverless Function has crashed"
```

### VERCEL (Después - Arreglado)
```
Browser
  ↓
push a GitHub
  ↓
Vercel detecta cambios
  ├─ Build inicia
  ├─ Vercel ENV VARS ya están configuradas ✅
  ├─ astro build
  │   ├─ process.env.SITE_URL → valor correcto ✅
  │   └─ Output: código robusto
  │
  ├─ Deploy a Vercel
  ├─ GET /es
  │   ├─ astro.config.mjs: SITE_URL ✅
  │   ├─ Middleware: dentro try-catch ✅
  │   ├─ env.ts: vars de Vercel ✅
  │   ├─ Componentes: vars con fallback ✅
  │   ├─ fetch("https://api-cms.com/api/...") ✅
  │   └─ Respuesta: HTML completo ✅
  │
  └─ Vercel devuelve: 200 OK ✅
      ↓
Browser muestra: Página completa ✅
```

---

## 📋 TABLA DE VARIABLES

| Variable | Antes | Después | ¿Requerida? | Ubicación |
|----------|-------|---------|-------------|-----------|
| PUBLIC_API_HOST | ❌ Sin validar | ✅ Centralizado | Sí | env.ts |
| PUBLIC_API_TOKEN | ❌ Sin validar | ✅ Centralizado | Sí | env.ts |
| PUBLIC_CONTACT_API_HOST | ❌ Sin validar | ✅ Centralizado | Sí | env.ts |
| PUBLIC_CONTACT_API_TOKEN | ❌ Sin validar | ✅ Centralizado | Sí | env.ts |
| PUBLIC_GTM_ID | ❌ Sin validar | ✅ Con fallback | No | env.ts |
| PUBLIC_PROMOTION_ID | ❌ Sin validar | ✅ Con fallback | No | env.ts |
| SITE_URL | ❌ import.meta.env | ✅ process.env | No | astro.config.mjs |
| LOG_LEVEL | ❌ Sin usar | ✅ Para debugging | No | env.ts |

---

## 🎯 CHECKLIST DE VERIFICACIÓN

```
ANTES DEL DEPLOY A VERCEL:
  [ ] Todas las variables están en src/config/env.ts
  [ ] Los servicios importan desde env.ts
  [ ] El middleware tiene try-catch
  [ ] Los endpoints API validan variables
  [ ] astro.config.mjs usa process.env

EN VERCEL (Environment Variables):
  [ ] PUBLIC_API_HOST = valor correcto
  [ ] PUBLIC_API_TOKEN = valor correcto
  [ ] PUBLIC_CONTACT_API_HOST = valor correcto
  [ ] PUBLIC_CONTACT_API_TOKEN = valor correcto
  [ ] PUBLIC_GTM_ID = valor correcto (opcional)

DESPUÉS DEL DEPLOY:
  [ ] Hard refresh (Ctrl+Shift+R)
  [ ] Console sin errores en rojo
  [ ] Network muestra 200 OK en APIs
  [ ] Página se carga completamente
  [ ] Función no devuelve 500
```

---

## 🚨 PUNTOS CRÍTICOS

```
1. VERCEL ENV VARS CONFIGURADAS
   └─ Sin esto, vuelves al error 500

2. Variables importadas desde env.ts
   └─ Sin esto, hay inconsistencia

3. Try-catch en puntos críticos
   └─ Sin esto, un error colapsa la app

4. Validaciones antes de usar variables
   └─ Sin esto, intentas hacer fetch a URLs undefined

5. Fallbacks en endpoints no críticos
   └─ Sin esto, errores menores rompen la app
```

Todos estos puntos ya están implementados ✅
