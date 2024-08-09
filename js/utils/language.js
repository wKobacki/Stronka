// /js/utils/language.js

export function changeLanguage(languageCode) {
    console.log('Switching to language:', languageCode);
    
    // Uzyskaj aktualny URL i zmień jego ścieżkę na wersję językową
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');

    // Ustal, gdzie znajduje się katalog językowy
    if (pathSegments.includes('Admin')) {
        // Jeśli jesteśmy w katalogu Admin
        const adminIndex = pathSegments.indexOf('Admin');
        pathSegments[adminIndex + 1] = languageCode;
    } else if (pathSegments.includes('User')) {
        // Jeśli jesteśmy w katalogu User
        const userIndex = pathSegments.indexOf('User');
        pathSegments[userIndex + 1] = languageCode;
    } else {
        // Domyślna obsługa jeśli katalog językowy jest w katalogu głównym
        pathSegments[1] = languageCode;
    }

    // Utwórz nowy URL
    const newPath = pathSegments.join('/');
    window.location.href = newPath;
}
