# INSTRUCCIONES PARA CONFIGURAR VERCEL

## 🚀 Cómo Configurar las Variables de Entorno en Vercel

### Paso 1: Acceder al Dashboard de Vercel
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto: **taqueritos-qa.yummiespromociones.com**

### Paso 2: Ir a Settings > Environment Variables
1. Click en **Settings** (arriba a la derecha)
2. En el menú lateral izquierdo, busca **Environment Variables**
3. Click en **Environment Variables**

### Paso 3: Agregar las Variables Requeridas

Copia y pega cada una de estas variables:

#### Grupo 1: API CMS/Participaciones (REQUERIDO)
```
Nombre: PUBLIC_API_HOST
Valor: https://api-cms-yummies.onrender.com
Entornos: Production, Preview, Development
```

```
Nombre: PUBLIC_API_TOKEN
Valor: [Tu token aquí - obtén del proveedor del CMS]
Entornos: Production, Preview, Development
```

#### Grupo 2: API de Contacto (REQUERIDO)
```
Nombre: PUBLIC_CONTACT_API_HOST
Valor: https://api-crm.yummiespromociones.com/api
Entornos: Production, Preview, Development
```

```
Nombre: PUBLIC_CONTACT_API_TOKEN
Valor: [Tu token aquí]
Entornos: Production, Preview, Development
```

#### Grupo 3: Google Tag Manager (RECOMENDADO)
```
Nombre: PUBLIC_GTM_ID
Valor: GTM-[TU_ID]
Entornos: Production, Preview, Development
```

#### Grupo 4: Configuración Adicional (OPCIONAL)
```
Nombre: PUBLIC_PROMOTION_ID
Valor: 1
Entornos: Production, Preview, Development
```

```
Nombre: SITE_URL
Valor: https://taqueritos.com
Entornos: Production, Preview, Development
```

```
Nombre: LOG_LEVEL
Valor: info
Entornos: Production, Preview, Development
```

### Paso 4: Guardar y Hacer Deploy
1. Después de agregar cada variable, click en **Save** (o se guardará automáticamente)
2. Ve a **Deployments**
3. Haz click en el botón **Redeploy** en el último deployment
4. Espera a que termine (toma 2-5 minutos)

### Paso 5: Verificar que Funciona
1. Abre tu sitio en el navegador
2. Abre DevTools (F12)
3. Ve a la pestaña **Console**
4. No deberías ver errores en rojo
5. Ve a **Network** y verifica que los endpoints de API responden con status 200

---

## 🆘 Troubleshooting

### Problema: Aún veo error 500
**Solución:** 
1. Verifica que TODAS las variables están configuradas (no hay ninguna vacía)
2. Confirma que los valores son correctos (sin espacios extras)
3. Espera 2-3 minutos después del deploy (cache de Vercel)
4. Hard refresh: Ctrl+Shift+R (o Cmd+Shift+R en Mac)

### Problema: Los logs no muestran información
**Solución:**
1. Ve a Vercel Dashboard > Deployments
2. Click en el deployment actual
3. Busca la sección **Function Logs**
4. Si está vacío, espera unos segundos y refresca

### Problema: Dice "Variables de entorno no configuradas"
**Solución:**
1. Verifica que escribiste exactamente el nombre de la variable (con mayúsculas/minúsculas correctas)
2. Elimina espacios en blanco al inicio o final
3. Verifica que está guardada (debería aparecer en la lista)

---

## 📝 Valores Esperados para Cada Variable

### PUBLIC_API_HOST
- **Descripción:** URL base del API CMS donde están los datos de participaciones
- **Formato:** `https://dominio.com` o `https://dominio.com/api`
- **Ejemplo:** `https://api-cms-yummies.onrender.com`
- **¿Dónde obtenerlo?** De tu proveedor del CMS (Strapi, Sanity, etc.)

### PUBLIC_API_TOKEN
- **Descripción:** Token de autenticación para acceder al API CMS
- **Formato:** String de token Bearer o API key
- **Ejemplo:** `abcd1234efgh5678ijkl9012mnop3456`
- **¿Dónde obtenerlo?** Dashboard del CMS > API Tokens
- **⚠️ IMPORTANTE:** No compartir este valor en GitHub

### PUBLIC_CONTACT_API_HOST
- **Descripción:** URL base del API de Contacto/CRM
- **Formato:** `https://dominio.com` o `https://dominio.com/api`
- **Ejemplo:** `https://api-crm.yummiespromociones.com/api`

### PUBLIC_CONTACT_API_TOKEN
- **Descripción:** Token para acceder al API de Contacto
- **Formato:** String de token
- **⚠️ IMPORTANTE:** Mantener seguro, no compartir

### PUBLIC_GTM_ID
- **Descripción:** Google Tag Manager ID para analytics
- **Formato:** `GTM-XXXXXX`
- **Ejemplo:** `GTM-XXXXXX`
- **¿Dónde obtenerlo?** Google Tag Manager Dashboard

---

## ✅ Checklist Antes de Deploy

- [ ] He agregado `PUBLIC_API_HOST` con valor correcto
- [ ] He agregado `PUBLIC_API_TOKEN` con valor correcto
- [ ] He agregado `PUBLIC_CONTACT_API_HOST` con valor correcto
- [ ] He agregado `PUBLIC_CONTACT_API_TOKEN` con valor correcto
- [ ] He verificado que NO hay espacios extras en los valores
- [ ] He clickeado **Save** en cada variable
- [ ] He hecho un nuevo **Redeploy**
- [ ] He esperado 2-3 minutos para que Vercel procese los cambios

---

## 🔒 Seguridad

**IMPORTANTE:**
- Nunca compartas los tokens en Discord, emails o mensajes de chat
- Mantén los tokens en Vercel únicamente
- Si un token se expone, generar uno nuevo inmediatamente
- Los tokens de producción deben ser diferentes a los de desarrollo

---

## 📞 Si Necesitas Ayuda

1. Revisa los logs en Vercel (Deployments > Logs > Function Logs)
2. Verifica que todas las variables estén configuradas
3. Contacta al equipo técnico con los logs del error
