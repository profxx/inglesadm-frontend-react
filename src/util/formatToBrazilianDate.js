// Formatar a data para o formato brasileiro dd/MM/yyyy
export const formatToBrazilianDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}