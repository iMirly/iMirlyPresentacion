// ============================================
// iMirly - Footer Auto-Injector
// Inyecta el footer automáticamente en cualquier página
// ============================================

(function() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer__content" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 40px;">
                <div class="footer__brand" style="flex-shrink: 0;">
                    <span class="footer__logo" style="font-size: 1.75rem; font-weight: 800; color: white; display: block; margin-bottom: 8px;">iMirly</span>
                    <p class="footer__text" style="color: rgba(255,255,255,0.8); font-size: 0.9rem; margin: 0;">Proyecto académico DAM</p>
                    <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 8px;">Granada, España · 2025</p>
                </div>

                <div class="footer__links" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; min-width: 500px;">
                    <!-- Columna 1: Proyecto -->
                    <div class="footer__column">
                        <h4 style="color: white; font-size: 0.85rem; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">Proyecto</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                            <li><a href="https://imirly.github.io/iMirlyPresentacion/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; flex-shrink: 0;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Presentación web</a></li>
                            <li><a href="https://imirly.github.io/Manual-de-usuario/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; flex-shrink: 0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>Manual de usuario</a></li>
                            <li><a href="https://imirly.github.io/iMirlyWeb-MaquetacionEnHtml/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; flex-shrink: 0;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Versión web (test)</a></li>
                            <li><a href="https://imirly.github.io/iMirlyDocumentacion/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; flex-shrink: 0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>Documentación técnica</a></li>
                        </ul>
                    </div>

                    <!-- Columna 2: Recursos -->
                    <div class="footer__column">
                        <h4 style="color: white; font-size: 0.85rem; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">Recursos</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                            <li><a href="https://github.com/iMirly/iMirly" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; flex-shrink: 0;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Repositorio código</a></li>
                            <li><a href="https://github.com/iMirly" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; flex-shrink: 0;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Organización GitHub</a></li>
                            <li><a href="YOUR_FIGMA_URL_HERE" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; flex-shrink: 0;"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>Prototipo Figma</a></li>
                            <li><a href="YOUR_CANVA_URL_HERE" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.75); font-size: 0.85rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; flex-shrink: 0;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><circle cx="15.5" cy="8.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/><circle cx="8.5" cy="15.5" r="1.5"/></svg>Presentación Canva</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer__bottom" style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.15); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                <p style="color: rgba(255,255,255,0.6); font-size: 0.8rem; margin: 0;">&copy; 2025 iMirly. Todos los derechos reservados.</p>
                <p style="color: rgba(255,255,255,0.4); font-size: 0.75rem; margin: 0;">Proyecto académico DAM · Granada, España</p>
            </div>
        </div>
    </footer>`;

    // Insertar antes del cierre de </body>
    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();