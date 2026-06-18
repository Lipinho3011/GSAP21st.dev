# GSAP ScrollTrigger
Esse é o principal. Use quando a transição acontece conforme o usuário rola a página.
Com ele você faz:

**Efeito** | **Como fica**
1. Seção fixa enquanto anima | pin: true
2. Animação controlada pelo scroll	| scrub: true
3. Troca de seção com snap |	snap
4. Horizontal scroll fake	| seção vertical controlando movimento horizontal
5. Hero virando próxima seção |	timeline com pin + scrub


# GSAP ScrollSmoother
Use junto com ScrollTrigger quando quiser aquele scroll mais premium, macio, com parallax e sensação de site de agência/Awwwards.
Ele serve para:

**Efeito** | **Resultado**
1. Scroll suave | movimento mais fluido
2. Parallax | imagens e fundos se movem em velocidades diferentes
3. Lag	| elementos acompanham o scroll com atraso elegante
4. Profundidade | ótimo para hero, cards, backgrounds e textos grandes


# GSAP Flip
Use quando a transição envolve elementos mudando de lugar entre seções.
Exemplo:

Na seção 1 tem uma imagem pequena no canto.
Na seção 2 ela vira o fundo inteiro.
Na seção 3 ela vira um card.

O Flip pega o estado antigo e o novo do elemento e anima a transição entre eles sem você precisar calcular posição, escala e rotação manualmente.

Use para:

**Efeito** | **Exemplo**
1. Card vira seção	projeto abre em tela cheia
2. Imagem pequena vira banner	transição hero → detalhe
3. Grid reorganizando	cards trocando posição
4. Menu expandindo	botão vira overlay
5. Elemento compartilhado entre seções	mesma imagem “viaja” pelo layout


# Tecnologias fora do GSAP que combinam muito
## Lenis

Alternativa muito usada para smooth scroll.
Dá pra usar Lenis + GSAP ScrollTrigger, principalmente se você não quiser ou não puder usar ScrollSmoother.

Use para:

**Caso**  |	**Boa escolha**
Scroll suave leve	|   Lenis
Site React/Vite	| Lenis + GSAP
Parallax simples | Lenis + ScrollTrigger
Controle manual do scroll | Lenis


## View Transition API

Boa para transição entre páginas, rotas ou estados de interface, não exatamente scroll. Ela permite criar transições animadas entre views em SPA e também navegações de páginas, dependendo do caso.

Use para:

**Caso** | **Boa escolha**
Trocar página com fade/slide | View Transition API
Card de lista virando página de detalhe	| View Transition API
SPA com rotas animadas	| View Transition API
Transição simples sem biblioteca pesada	| View Transition API


## Barba.js ou Swup

Use quando você quer transições entre páginas HTML reais, tipo:

**home.html → projetos.html → contato.html**

Eles ajudam a trocar o conteúdo da página sem aquele reload seco. Aí você pode animar entrada e saída com GSAP.