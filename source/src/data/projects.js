const image = (name) => `/images/work/${name}`;
const thumb = (name) => `/images/work/thumbs/${name}`;
const mobile = (src) => src.replace('/images/work/', '/images/mobile/work/').replace(/\.(png|jpe?g)$/i, '.jpg');

export const projects = [
  {
    slug: 'volvo-safety-retail-ar', title: 'Volvo Cars Retail Safety AR', category: 'Mixed Reality', year: '2025',
    thumb: thumb('volvo-safety-ar.jpg'), client: 'Volvo Cars', services: 'AR experience design, UX/UI, Unity development, analytics',
    link: 'https://www.volvocars.com/intl/safety/',
    intro: 'An iPad Pro augmented reality experience for Volvo Cars retail environments, turning safety technology into something visitors can explore on the real vehicle instead of watching on a flat screen. LiDAR-secured anchors keep scenarios aligned inside and outside four vehicle models, while integrated analytics reveal which features attract attention and how long visitors engage. The platform is designed to expand as more vehicles are added.',
    video: '/video/volvo-safety-retail-ar.mp4', mobileVideo: '/video/mobile/volvo-safety-retail-ar.mp4',
    gallery: [
      [1.78, 'volvo-safety-ar-hero.jpg', 'Visitor exploring Volvo safety structures in augmented reality'],
      [1.78, 'volvo-safety-ar-1.jpg', 'Volvo retail safety AR experience on iPad Pro'],
      [1.78, 'volvo-safety-ar-2.jpg', 'Young visitors exploring Volvo safety features with the AR app'],
      [1.78, 'volvo-safety-ar-3.jpg', 'Child safety feature aligned with a Volvo vehicle'],
      [.75, 'volvo-safety-ar-4.jpg', 'Volvo Safety For Life experience welcome screen'],
      [.75, 'volvo-safety-ar-5.jpg', 'Driver understanding safety feature visualization']
    ]
  },
  {
    slug: 'world-of-volvo', title: 'World of Volvo', category: 'Interactive Media', year: '2024',
    thumb: thumb('wov.jpg'), client: 'World of Volvo', services: '3D visualization, interaction design, development',
    link: 'https://www.worldofvolvo.com/sv/utstallning/',
    intro: "A captivating interactive experience for the Volvo Experience Center's Diver Station. As UI/UX Designer and Unity Developer, I created an immersive environment that reveals Volvo's innovations and heritage in depth, enhancing the exhibition's informative layer for visitors eager to explore the brand's technological contributions.",
    video: 'https://iamjaydesign.com/images/assets/WOV/DIVER-Station.mp4', mobileVideo: '/video/mobile/world-of-volvo.mp4',
    gallery: [
      [2.37, 'wov-hero.png', 'World of Volvo exhibition overview'], [1.74, 'wov-1.png', 'World of Volvo interactive experience'],
      [1.74, 'wov-2.png', 'World of Volvo 3D environment'], [1.58, 'wov-3.png', 'World of Volvo delivery'],
      [1.51, 'wov-4.png', 'World of Volvo 3D assets'], [1.67, 'wov-5.png', 'World of Volvo station detail']
    ]
  },
  {
    slug: 'lf-digital-derby', title: 'LF Digital Derby', category: 'Advertisement', year: '2023',
    thumb: thumb('lf-derby.jpg'), client: 'LF Digital', services: '3D scanning, photogrammetry, facial capture, Unreal Engine development',
    link: 'https://spelaroll.nu/',
    intro: "An innovative digital FIFA derby match between IFK and Häcken football clubs in Gothenburg, Sweden. We scanned actual players using LIDAR and photogrammetry, created authentic uniforms with 3D garment software, and utilized Unreal's LiveLink face capture technology to bring the players to life with realistic expressions and movements.",
    video: 'https://iamjaydesign.com/images/assets/LFDigitalDerby/IFK-16-9-web.mp4', mobileVideo: '/video/mobile/lf-digital-derby.mp4',
    gallery: [[1, 'lf-derby-1.png', 'Digital derby player scan'], [1, 'lf-derby-3.png', 'Digital derby uniform simulation'], [1, 'lf-derby-2.png', 'Digital derby match render'], [1, 'lf-derby-4.png', 'Digital derby stadium render'], [1, 'lf-derby-5.png', 'Digital derby campaign still']]
  },
  {
    slug: 'volvo-cars-ar', title: 'Volvo Cars AR', category: 'Augmented Reality', year: '2023',
    thumb: thumb('volvo-ar.jpg'), client: 'Volvo Cars', services: 'Mobile AR, 3D visualization, UX/UI design',
    link: 'https://apps.apple.com/se/app/volvo-cars-ar/id6448719010',
    intro: 'This is a mobile augmented reality experience that allows users to view and explore Volvo EX90, EX30 and ES90 in a new and engaging way. Users can place the AR models on any surface, view them from all angles, and capture screenshots of the cars in their real environment.',
    video: 'https://iamjaydesign.com/images/assets/Volvo%20Cars%20AR/Volvo%20AR-White.mp4', mobileVideo: '/video/mobile/volvo-cars-ar.mp4',
    gallery: [[1.26, 'volvo-ar-1.png', 'Volvo Cars AR app screen'], [.56, 'volvo-ar-3.png', 'Volvo Cars AR model view'], [1.57, 'volvo-ar-2.png', 'Volvo Cars AR model placement'], [1.92, 'volvo-ar-4.png', 'Volvo Cars AR interface detail'], [1.78, 'volvo-ar-5.png', 'Volvo Cars AR capture mode']]
  },
  {
    slug: 'faurecia', title: 'Cockpit of the Future', category: 'Automotive HMI', year: '2023',
    thumb: thumb('faurecia.jpg'), client: 'Faurecia', services: 'UX research, UI design, interaction design',
    link: 'https://www.faurecia-cz.cz/en/technologies/cockpit-future',
    intro: 'An automotive HMI design project for Faurecia, a global tier-1 automotive supplier. The project focused on creating innovative infotainment and driver experience interfaces that balance aesthetics with safety and usability for next-generation vehicles.',
    gallery: [[1.95, 'faurecia-1.png', 'Cockpit of the future interface'], [1.9, 'faurecia-3.png', 'Cockpit HMI cluster'], [1.91, 'faurecia-4.png', 'Cockpit HMI screen study'], [1.95, 'faurecia-5.png', 'Cockpit interior view'], [.67, 'faurecia-2.png', 'Cockpit HMI detail'], [2.13, 'faurecia-6.png', 'Cockpit concept render']]
  },
  {
    slug: 'weret-watch', title: 'Weret Watch', category: 'Product Design', year: '2022',
    thumb: thumb('weret.jpg'), client: 'Weret', services: 'Industrial design, 3D modeling, brand identity',
    link: 'https://www.stokedfortravel.com/review-weret-luxury-surf-watch/',
    intro: 'A premium product design project for Weret, revolutionizing traditional timepieces with innovative technology and elegant aesthetics. This project combines detailed industrial design with thoughtful user experience.',
    video: '/video/weret-crown.mp4', mobileVideo: '/video/mobile/weret-crown.mp4',
    gallery: [[2.25, 'weret-hero.png', 'Weret watch hero render'], [.71, 'weret-3.png', 'Weret watch case study'], [1.4, 'weret-1.png', 'Weret watch render'], [.83, 'weret-2.png', 'Weret watch detail'], [1.78, 'weret-4.png', 'Weret watch on wrist']]
  },
  {
    slug: 'google-chromebook', title: 'Google Chromebook UI', category: 'Interface Design', year: '2020',
    thumb: thumb('chromebook.jpg'), client: 'Google', services: 'UI design, UX research, design system',
    link: 'https://www.google.com/chromebook/',
    intro: "A streamlined interface design project for Google Chromebook, focusing on enhancing user experience while maintaining Google's signature simplicity. This design system creates a cohesive and intuitive experience across the platform.",
    gallery: [[2.37, 'chromebook-1.png', 'Chromebook interface design'], [1.51, 'chromebook-3.png', 'Chromebook UI system'], [1.51, 'chromebook-2.png', 'Chromebook UI detail'], [1.51, 'chromebook-4.png', 'Chromebook UI application']]
  },
  {
    slug: 'gordon-murray', title: 'Gordon Murray Design', category: 'Automotive HMI', year: '2021',
    thumb: thumb('gordon-murray.jpg'), client: 'Gordon Murray Design', services: 'UI design, interaction design, user testing',
    link: 'https://www.gordonmurrayautomotive.com/automotive/t50',
    intro: "A sophisticated automotive HMI design project for Gordon Murray Design. The work focused on next-generation interfaces that enhance the driving experience while preserving the brand's iconic, driver-first design language.",
    video: 'https://iamjaydesign.com/images/assets/GMA/Videos/T.50%20Continued%20Development%20of%20XP2%20&%20XP3.mp4', mobileVideo: '/video/mobile/gordon-murray.mp4',
    gallery: [[1.78, 'gordon-murray.png', 'Gordon Murray Design HMI overview'], [1.78, 'gordon-murray-1.png', 'Gordon Murray interface components'], [1.78, 'gordon-murray-2.png', 'Gordon Murray dashboard design']]
  },
  {
    slug: 'esab', title: 'ESAB', category: 'Interactive Application', year: '2024',
    thumb: thumb('esab.jpg'), client: 'ESAB', services: 'UI/UX design, interactive development', link: 'https://www.esab.com/',
    intro: 'A cutting-edge interactive application for ESAB, a global leader in welding and cutting equipment. The experience presents products and technologies in an immersive, approachable way, helping audiences explore complex features in detail.',
    video: 'https://iamjaydesign.com/images/assets/ESAB/ESAB-Interactive%20App.mp4', mobileVideo: '/video/mobile/esab.mp4',
    gallery: [[1.78, 'esab.png', 'ESAB interactive application overview'], [1.78, 'esab-1.png', 'ESAB interactive interface'], [1.78, 'esab-2.png', 'ESAB application detail']]
  },
  {
    slug: 'magna', title: 'Magna', category: 'Automotive HMI', year: '2023',
    thumb: thumb('magna.jpg'), client: 'Magna', services: 'UI/UX design, interaction design, prototyping', link: 'https://www.magna.com/',
    intro: 'An advanced cockpit experience for Magna that integrates emerging automotive technology with human-centered interaction design. The result is an intuitive interface concept for the next generation of vehicles.',
    video: 'https://iamjaydesign.com/images/assets/Magna/Magna-CP-rev-12thDec.mp4', mobileVideo: '/video/mobile/magna.mp4',
    gallery: [[1.78, 'magna.png', 'Magna automotive HMI overview'], [1.78, 'magna-1.png', 'Magna automotive interface'], [1.78, 'magna-2.png', 'Magna dashboard design']]
  },
  {
    slug: 'volvo-group-ar', title: 'Volvo Group AR', category: 'Augmented Reality', year: '2020',
    thumb: thumb('volvo-group-ar.jpg'), client: 'Volvo Group', services: 'AR development, UI/UX design, interactive media', link: 'https://www.volvogroup.com/',
    intro: "An augmented reality experience for Volvo Group's Ocean Race exhibition. Visitors could explore maritime technologies and sustainability stories through immersive digital content layered over the physical exhibition.",
    video: 'https://iamjaydesign.com/images/assets/Volvo%20Group%20AR/Volvo%20Group%20Ocean%20Race%20Interactive%20Play-Product%20Video.mp4', mobileVideo: '/video/mobile/volvo-group-ar.mp4',
    gallery: [[1.78, 'volvo-group-ar.jpg', 'Volvo Group Ocean Race AR experience'], [1.78, 'volvo-group-ar-1.jpg', 'Volvo Group AR interface'], [1.78, 'volvo-group-ar-2.jpg', 'Volvo Group exhibition environment']]
  },
  {
    slug: 'geely-motors', title: 'Geely Motors', category: 'Automotive HMI', year: '2020',
    thumb: thumb('geely-motors.jpg'), client: 'Geely Motors', services: 'UI/UX design, interaction design, prototyping', link: 'https://global.geely.com/',
    intro: 'An automotive HMI concept for Geely Motors that reimagines the in-car user experience. The interface integrates connected technology with intuitive interaction patterns while keeping safety and accessibility central.',
    video: 'https://iamjaydesign.com/images/assets/Geely%20Motors/Geely-Liv%20Demo%20Video-Optimized.mp4', mobileVideo: '/video/mobile/geely-motors.mp4',
    gallery: [[1.78, 'geely-motors.png', 'Geely Motors HMI overview'], [1.78, 'geely-motors-1.png', 'Geely Motors interface'], [1.78, 'geely-motors-2.png', 'Geely Motors dashboard']]
  }
].map((project) => ({
  ...project,
  gallery: project.gallery.map(([ratio, file, alt]) => {
    const src = image(file);
    return { ratio, src, mobileSrc: mobile(src), alt };
  })
}));

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export function projectNeighbours(slug) {
  const index = Math.max(0, projects.findIndex((project) => project.slug === slug));
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length]
  };
}
