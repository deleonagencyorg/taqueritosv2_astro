const translationsByTexts = new WeakMap<Record<string, string>, Record<string, unknown>>();

export function buildCommonTranslations(texts: Record<string, string>): Record<string, unknown> {
  const cached = translationsByTexts.get(texts);
  if (cached) return cached;

  const translations: Record<string, unknown> = Object.create(null);
  for (const [key, value] of Object.entries(texts)) {
    const path = key.split('.');
    let parent = translations;
    for (const part of path.slice(0, -1)) {
      const child = parent[part];
      if (!child || typeof child !== 'object' || Array.isArray(child)) {
        parent[part] = Object.create(null);
      }
      parent = parent[part] as Record<string, unknown>;
    }
    parent[path[path.length - 1]] = parseValue(value);
  }
  translationsByTexts.set(texts, translations);
  return translations;
}

function parseValue(value: string): unknown {
  try {
    const parsed: unknown = JSON.parse(value);
    if (parsed !== null && typeof parsed === 'object') return parsed;
  } catch {
    // Scalar text is stored as plain text; JSON parsing is only for structured values.
  }
  return value;
}
