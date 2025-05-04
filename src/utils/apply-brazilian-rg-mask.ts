export function applyBrazilianRGMask(rg: string): string {
  const v = rg.replace(/\D/g, '') // Remove tudo o que não é dígito
  return v
    .replace(/(\d{2})(\d)/, '$1.$2') // Coloca ponto entre o segundo e o terceiro dígitos
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto entre o quinto e o sexto dígitos
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Coloca um hífen
}
