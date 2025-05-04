export function applyBrazilianPhoneMask(phone: string): string {
  const v = phone.replace(/\D/g, '') // Remove tudo o que não é dígito
  return v
    .replace(/(\d{2})(\d)/, '($1) $2') // Coloca um ponto entre o terceiro e o quarto dígitos
    .replace(/(\d{5})(\d)/, '$1-$2') // Coloca um hífen depois do bloco de quatro dígitos
}
