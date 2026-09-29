# Integrar Feedbucket según la rama desplegada en Vercel

## Objetivo

Mostrar Feedbucket en cualquier despliegue cuya rama sea distinta de `main`, por ejemplo `develop`, `staging` o una rama de feature. El script no debe cargarse en producción (`main`) ni depender de una variable personalizada.

## Decisión técnica

Vercel expone automáticamente la rama desplegada mediante:

```text
VERCEL_GIT_COMMIT_REF
```

No es necesario configurarla en el panel de Vercel. En código de servidor de Astro se consulta con:

```ts
process.env.VERCEL_GIT_COMMIT_REF
```

No conviene ejecutar `git branch --show-current` durante el build porque Vercel puede trabajar sobre un commit desacoplado (`detached HEAD`). La variable del sistema de Vercel es la fuente confiable para identificar la rama del despliegue.

La condición utilizada es:

```ts
const deployedBranch = process.env.VERCEL_GIT_COMMIT_REF;
const shouldLoadFeedbucket = Boolean(deployedBranch && deployedBranch !== 'main');
```

Esto produce el siguiente comportamiento:

- `main`: Feedbucket no se incluye.
- `develop`, `staging` y cualquier otra rama: Feedbucket se incluye.
- Desarrollo local sin metadatos de Vercel: Feedbucket no se incluye.

## Implementación en Astro

Crear `src/components/common/Feedbucket.astro`:

```astro
---
const feedbucketProjectKey = 'REEMPLAZAR_CON_LA_CLAVE_DEL_PROYECTO';
const deployedBranch = process.env.VERCEL_GIT_COMMIT_REF;
const shouldLoadFeedbucket = Boolean(deployedBranch && deployedBranch !== 'main');
---

{
  shouldLoadFeedbucket && (
    <script is:inline define:vars={{ feedbucketProjectKey }}>
      (function(k) {
        let s = document.createElement('script');
        s.defer = true;
        s.src = 'https://cdn.feedbucket.app/assets/feedbucket.js';
        s.dataset.feedbucket = k;
        document.head.appendChild(s);
      })(feedbucketProjectKey);
    </script>
  )
}
```

Después, importarlo en el layout global:

```astro
---
import Feedbucket from '../components/common/Feedbucket.astro';
---

<html>
  <head>
    <Feedbucket />
    <!-- Resto del head -->
  </head>
</html>
```

Debe colocarse en el layout compartido por todas las páginas para evitar repetir la integración.

### Por qué se usa `define:vars`

El contenido de un `<script is:inline>` se trata como JavaScript en línea. `define:vars` serializa la clave de Feedbucket de forma válida dentro del script. No se debe insertar una expresión Astro como texto dentro del cuerpo del script, porque podría terminar generándose literalmente en el HTML.

## Verificación

Simular una rama no productiva:

```bash
VERCEL_GIT_COMMIT_REF=develop npm run build
```

El HTML generado debe contener:

```text
https://cdn.feedbucket.app/assets/feedbucket.js
```

Simular producción:

```bash
VERCEL_GIT_COMMIT_REF=main npm run build
```

El HTML generado no debe contener el script de Feedbucket.

También se debe comprobar visualmente un Preview Deployment de Vercel y el despliegue de producción antes de fusionar.

## Adaptaciones

Si el proyecto utiliza otra rama productiva, reemplazar `'main'` por su nombre.

Si Feedbucket también debe mostrarse localmente, se necesita una condición adicional explícita. No se recomienda asumir que la ausencia de `VERCEL_GIT_COMMIT_REF` representa una rama no productiva, porque también puede significar que la aplicación se ejecuta fuera de Vercel.

En Next.js, Remix u otro framework desplegado en Vercel se puede mantener la misma condición, siempre que se evalúe del lado del servidor o durante el build para no exponer lógica innecesaria al navegador.

## Prompt reutilizable para otra IA

```text
Integra Feedbucket en este proyecto desplegado en Vercel.

Requisitos:
- Debe cargarse en cualquier rama desplegada distinta de `main`.
- No debe cargarse en `main`.
- No quiero crear una variable personalizada.
- Usa la variable automática de Vercel `VERCEL_GIT_COMMIT_REF`.
- Si la rama no está disponible, no cargues Feedbucket.
- Encapsula la integración en un componente y colócalo en el layout global.
- La clave de Feedbucket es: REEMPLAZAR_CON_LA_CLAVE_DEL_PROYECTO.
- Evita duplicar el script durante la navegación.
- Ejecuta el build simulando `develop` y `main`.
- Comprueba que el HTML de `develop` contenga el script y que el de `main` no lo contenga.
- Respeta las convenciones y el framework existentes del proyecto.

Script base:

<script type="text/javascript">
  (function(k) {
    let s = document.createElement('script');
    s.defer = true;
    s.src = 'https://cdn.feedbucket.app/assets/feedbucket.js';
    s.dataset.feedbucket = k;
    document.head.appendChild(s);
  })('REEMPLAZAR_CON_LA_CLAVE_DEL_PROYECTO');
</script>
```
