# Bibliotecas pra efeito em texto
1. Texto borrado/deformado tipo “CHAOS”:	SplitText + CSS filter blur + SVG displacement (imagem de exemplo na pasta imges/CHAOS.png)
2. Aura colorida/amarela/roxa tipo “AURA”:	CSS text-shadow + GSAP animando variáveis CSS (imagem de exemplo na pasta imges/AURA.png)
3. Glitch cromático tipo “future”:	SplitText + camadas duplicadas + clip-path + blur + mix-blend-mode (imagem de exemplo na pasta imges/future.png)
4. Texto se dissolvendo em partículas tipo “supercollider”:	PixiJS + PixiPlugin, ou Three.js shaders (imagem de exemplo na pasta imges/supercollider.png)
5. Texto embaralhando estilo terminal/sci-fi:	ScrambleTextPlugin
6. Texto entrando letra por letra:	SplitText
7. Efeito controlado pelo scroll:	ScrollTrigger

# Bibliotecas GSAP
1. GSAP Core	Base de tudo: gsap.to(), from(), fromTo(), animações de CSS, atributos, arrays, callbacks e timelines.
2. Timeline	Sequenciar animações como uma “linha do tempo cinematográfica”: entrada, pausa, sobreposição, reverse, labels etc.
3. ScrollTrigger	O rei do scroll: animações ao rolar, scrub, pin, snap, seções fixas, progressos controlados pelo scroll.
4. ScrollSmoother	Scroll suave com suporte a parallax, usando scroll nativo, sem criar barra falsa. Excelente pra sites premium.
5. SplitText	Divide texto em letras, palavras ou linhas para animações de título bem profissionais.
6. ScrambleText	Efeito de texto embaralhando, estilo terminal, hacker, IA, interface sci-fi.
7. TextPlugin	Troca o texto gradualmente, caractere por caractere ou palavra por palavra. Bom pra typing effect.
8. Flip	Transições inteligentes entre estados de layout. Perfeito pra cards, grids, filtros, expansão de elementos e menus.
9. Draggable	Transforma elementos em arrastáveis, giráveis ou “tossable”, com suporte a touch e mouse.
10.	InertiaPlugin	Adiciona movimento com impulso, desaceleração e sensação física. Casa muito bem com Draggable.
11.	Observer	Detecta wheel, touch, pointer, swipe, direção e velocidade. Bom pra navegação por gesto e seções fullscreen.
12.	ScrollToPlugin	Anima a rolagem até uma seção ou posição específica. Ideal pra menus âncora e navegação suave.
13.	MotionPathPlugin	Move elementos seguindo paths SVG ou coordenadas. Serve pra órbitas, linhas técnicas, partículas e objetos voando.
14.	DrawSVGPlugin	Faz linhas SVG serem desenhadas progressivamente. Perfeito pra ícones, logos, mapas, grids e traços técnicos.
15.	MorphSVGPlugin	Transforma um path SVG em outro. Muito usado pra logos, ícones líquidos, formas orgânicas e efeitos premium.
16.	CustomEase	Cria curvas de easing personalizadas. É o tempero fino da animação, quando o movimento precisa ter “assinatura”.
17.	EasePack	Pacote de eases extras, como RoughEase, SlowMo e ExpoScaleEase. Bom pra efeitos energéticos, tremor e slow motion.
18.	CustomWiggle	Cria efeitos de wiggle controlados, tipo vibração, impacto, energia, instabilidade ou alerta visual.
19.	CustomBounce	Bounce customizável com squash/stretch. Útil pra motion mais cartunesco, UI divertida ou microinterações.
20.	useGSAP()	Hook oficial pra usar GSAP em React com cleanup mais seguro. Muito útil pra projetos React/Next/Vite.