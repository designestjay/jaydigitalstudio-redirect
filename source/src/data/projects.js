const image = (name) => `/images/work/${name}`;
const thumb = (name) => `/images/work/thumbs/${name}`;
const mobile = (src) => src.replace('/images/work/', '/images/mobile/work/').replace(/\.(png|jpe?g)$/i, '.jpg');

const shot = (file, alt) => {
  const src = image(file);
  return { file, src, mobileSrc: mobile(src), alt };
};

/**
 * Hand-laid gallery blocks matching iamjaydesign.com/works/<slug> page.tsx grids.
 * Types: full | grid | video | video-cell (video inside a grid, via grid.items)
 */
export const projects = [
  {
    slug: 'volvo-safety-retail-ar',
    title: 'Volvo Cars Retail Safety AR',
    category: 'Mixed Reality',
    year: '2025',
    thumb: thumb('volvo-safety-ar.jpg'),
    client: 'Volvo Cars',
    services: 'AR experience design, UX/UI, Unity development, analytics',
    link: 'https://www.volvocars.com/intl/safety/',
    linkLabel: 'View project',
    intro: 'An iPad Pro augmented reality experience for Volvo Cars retail environments, turning safety technology into something visitors can explore on the real vehicle instead of watching on a flat screen. LiDAR-secured anchors keep scenarios aligned inside and outside four vehicle models, while integrated analytics reveal which features attract attention and how long visitors engage. The platform is designed to expand as more vehicles are added.',
    video: '/video/volvo-safety-retail-ar.mp4',
    mobileVideo: '/video/mobile/volvo-safety-retail-ar.mp4',
    galleryGap: 'loose',
    layout: [
      { type: 'full', shot: shot('volvo-safety-ar-hero.jpg', 'Visitor exploring Volvo safety structures in augmented reality') },
      { type: 'full', shot: shot('volvo-safety-ar-1.jpg', 'Volvo retail safety AR experience on iPad Pro') },
      { type: 'video', aspect: '16 / 9' },
      { type: 'full', shot: shot('volvo-safety-ar-2.jpg', 'Young visitors exploring Volvo safety features with the AR app') },
      { type: 'full', shot: shot('volvo-safety-ar-3.jpg', 'Child safety feature aligned with a Volvo vehicle') },
      {
        type: 'grid', cols: 2, aspect: '3 / 4', gap: 'loose',
        items: [
          { shot: shot('volvo-safety-ar-4.jpg', 'Volvo Safety For Life experience welcome screen') },
          { shot: shot('volvo-safety-ar-5.jpg', 'Driver understanding safety feature visualization') }
        ]
      }
    ]
  },
  {
    slug: 'world-of-volvo',
    title: 'World of Volvo',
    category: 'Interactive Media',
    year: '2024',
    thumb: thumb('wov.jpg'),
    client: 'World of Volvo',
    services: '3D visualization, interaction design, development',
    link: 'https://www.worldofvolvo.com/sv/utstallning/',
    linkLabel: 'View project',
    intro: "A captivating interactive experience for the Volvo Experience Center's Diver Station. As UI/UX Designer and Unity Developer, I created an immersive environment that reveals Volvo's innovations and heritage in depth, enhancing the exhibition's informative layer for visitors eager to explore the brand's technological contributions.",
    video: '/video/world-of-volvo.mp4',
    mobileVideo: '/video/mobile/world-of-volvo.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('wov-hero.png', 'World of Volvo exhibition overview') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('wov-1.png', 'World of Volvo interactive experience') },
          { shot: shot('wov-2.png', 'World of Volvo 3D environment') }
        ]
      },
      { type: 'video' },
      { type: 'full', shot: shot('wov-3.png', 'World of Volvo delivery') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('wov-4.png', 'World of Volvo 3D assets') },
          { shot: shot('wov-5.png', 'World of Volvo station detail') }
        ]
      }
    ]
  },
  {
    slug: 'lf-digital-derby',
    title: 'LF Digital Derby',
    category: '3D Visualization / Game',
    year: '2023',
    thumb: thumb('lf-derby.jpg'),
    client: 'LF Digital',
    services: '3D scanning, photogrammetry, facial capture, Unreal Engine development',
    link: 'https://spelaroll.nu/',
    linkLabel: 'View campaign',
    intro: 'An innovative digital FIFA derby match between IFK and Häcken football clubs in Gothenburg, Sweden. We scanned actual players using LIDAR and photogrammetry, created authentic uniforms with 3D garment software, and utilized Unreal\'s LiveLink face capture technology to bring the players to life with realistic expressions and movements.',
    video: '/video/lf-digital-derby.mp4',
    mobileVideo: '/video/mobile/lf-digital-derby.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('lf-derby-1.png', 'Digital derby player scan') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('lf-derby-3.png', 'Digital derby uniform simulation') },
          { shot: shot('lf-derby-2.png', 'Digital derby match render') }
        ]
      },
      { type: 'video' },
      { type: 'full', shot: shot('lf-derby-4.png', 'Digital derby stadium render') },
      { type: 'full', shot: shot('lf-derby-5.png', 'Digital derby campaign still') }
    ]
  },
  {
    slug: 'volvo-cars-ar',
    title: 'Volvo Cars AR',
    category: 'Augmented Reality',
    year: '2023',
    thumb: thumb('volvo-ar.jpg'),
    client: 'Volvo Cars',
    services: 'Mobile AR, 3D visualization, UX/UI design',
    link: 'https://apps.apple.com/se/app/volvo-cars-ar/id6448719010',
    linkLabel: 'View project',
    intro: 'This is a mobile augmented reality experience that allows users to view and explore Volvo EX90, EX30 and ES90 in a new and engaging way. Users can place the AR models on any surface, view them from all angles, and capture screenshots of the cars in their real environment.',
    video: '/video/volvo-cars-ar.mp4',
    mobileVideo: '/video/mobile/volvo-cars-ar.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('volvo-ar-1.png', 'Volvo Cars AR app screen') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('volvo-ar-3.png', 'Volvo Cars AR model placement') },
          { type: 'video' }
        ]
      },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('volvo-ar-2.png', 'Volvo Cars AR model view') },
          { shot: shot('volvo-ar-4.png', 'Volvo Cars AR interface detail') }
        ]
      },
      { type: 'full', shot: shot('volvo-ar-5.png', 'Volvo Cars AR capture mode') }
    ]
  },
  {
    slug: 'faurecia',
    title: 'Cockpit of the Future',
    category: 'Automotive HMI',
    year: '2023',
    thumb: thumb('faurecia.jpg'),
    client: 'Faurecia',
    services: 'UX research, UI design, interaction design',
    link: 'https://www.faurecia-cz.cz/en/technologies/cockpit-future',
    linkLabel: 'View project',
    intro: 'An automotive HMI design project for Faurecia, a global tier-1 automotive supplier. The project focused on creating innovative infotainment and driver experience interfaces that balance aesthetics with safety and usability for next-generation vehicles.',
    galleryGap: 'loose',
    layout: [
      { type: 'full', shot: shot('faurecia-01.png', 'Faurecia dashboard main view') },
      {
        type: 'grid', cols: 2, aspect: '4 / 3', gap: 'loose',
        items: [
          { shot: shot('faurecia-02.png', 'Faurecia dashboard interface') },
          { shot: shot('faurecia-03.png', 'Faurecia navigation system') }
        ]
      },
      { type: 'full', shot: shot('faurecia-15.png', 'Faurecia system overview') },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'loose',
        items: [
          { shot: shot('faurecia-04.png', 'Faurecia UI module') },
          { shot: shot('faurecia-05.png', 'Faurecia mobile interface') }
        ]
      },
      { type: 'full', shot: shot('faurecia-06.png', 'Faurecia control panel') },
      {
        type: 'grid', cols: 2, aspect: '4 / 3', gap: 'loose',
        items: [
          { shot: shot('faurecia-07.png', 'Faurecia interface elements') },
          { shot: shot('faurecia-16.png', 'Faurecia system interface') }
        ]
      },
      { type: 'full', shot: shot('faurecia-11.png', 'Faurecia UI element') },
      {
        type: 'grid', cols: 3, aspect: '1 / 1', gap: 'loose',
        items: [
          { shot: shot('faurecia-12.png', 'Faurecia UI component') },
          { shot: shot('faurecia-13.png', 'Faurecia data visualization') },
          { shot: shot('faurecia-14.png', 'Faurecia UI elements') }
        ]
      }
    ]
  },
  {
    slug: 'weret-watch',
    title: 'Weret Watch',
    category: 'Product Design',
    year: '2022',
    thumb: thumb('weret.jpg'),
    client: 'Weret',
    services: 'Industrial design, 3D modeling, brand identity',
    link: 'https://www.stokedfortravel.com/review-weret-luxury-surf-watch/',
    linkLabel: 'View product',
    intro: 'A premium product design project for Weret, revolutionizing traditional timepieces with innovative technology and elegant aesthetics. This project combines detailed industrial design with thoughtful user experience.',
    video: '/video/weret-crown.mp4',
    mobileVideo: '/video/mobile/weret-crown.mp4',
    galleryGap: 'loose',
    layout: [
      { type: 'full', shot: shot('weret-15.png', 'Weret watch overview') },
      {
        type: 'grid', cols: 2, aspect: '4 / 3', gap: 'loose',
        items: [
          { shot: shot('weret-05.png', 'Weret watch design') },
          { shot: shot('weret-11.png', 'Weret watch components') }
        ]
      },
      { type: 'video', aspect: '16 / 9' },
      {
        type: 'grid', cols: 3, aspect: '1 / 1', gap: 'loose',
        items: [
          { shot: shot('weret-12.png', 'Weret watch face') },
          { shot: shot('weret-13.png', 'Weret watch strap') },
          { shot: shot('weret-14.png', 'Weret watch crown') }
        ]
      },
      { type: 'full', shot: shot('weret-16.png', 'Weret watch details') },
      { type: 'full', shot: shot('weret-17.png', 'Weret watch colors') }
    ]
  },
  {
    slug: 'google-chromebook',
    title: 'Google Chromebook UI',
    category: 'Interface Design',
    year: '2020',
    thumb: thumb('chromebook.jpg'),
    client: 'Google',
    services: 'UI design, UX research, design system',
    // Keep jaydigitalstudio's real Chromebook URL (iamjaydesign uses example.com)
    link: 'https://www.google.com/chromebook/',
    linkLabel: 'View project',
    intro: "A streamlined interface design project for Google Chromebook, focusing on enhancing user experience while maintaining Google's signature simplicity. This design system creates a cohesive and intuitive experience across the platform.",
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('chromebook-1.png', 'Chromebook interface design') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('chromebook-3.png', 'Chromebook UI system') },
          { shot: shot('chromebook-2.png', 'Chromebook UI detail') }
        ]
      },
      { type: 'full', shot: shot('chromebook-4.png', 'Chromebook UI application') }
    ]
  },
  {
    slug: 'gordon-murray',
    title: 'Gordon Murray Design',
    category: 'Automotive HMI',
    year: '2021',
    thumb: thumb('gordon-murray.jpg'),
    client: 'Gordon Murray Design',
    services: 'UI design, interaction design, user testing',
    link: 'https://www.gordonmurrayautomotive.com/automotive/t50',
    linkLabel: 'View project',
    intro: "A sophisticated automotive HMI design project for Gordon Murray Design, the legendary automotive engineering company. The project focused on creating next-generation interfaces that enhance the driving experience while maintaining the brand's iconic design language.",
    video: '/video/gordon-murray.mp4',
    mobileVideo: '/video/mobile/gordon-murray.mp4',
    galleryGap: 'loose',
    layout: [
      { type: 'full', shot: shot('gordon-murray-01.png', 'Gordon Murray Design HMI overview') },
      {
        type: 'grid', cols: 2, aspect: '4 / 3', gap: 'loose',
        items: [
          { shot: shot('gordon-murray-20.png', 'Gordon Murray interface components') },
          { shot: shot('gordon-murray-21.png', 'Gordon Murray dashboard design') }
        ]
      },
      { type: 'video', aspect: '16 / 9' },
      { type: 'full', shot: shot('gordon-murray-22.png', 'Gordon Murray HMI detail') },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'loose',
        items: [
          { shot: shot('gordon-murray-17.png', 'Gordon Murray UI module') },
          { shot: shot('gordon-murray-18.png', 'Gordon Murray interface study') }
        ]
      },
      { type: 'full', shot: shot('gordon-murray-19.png', 'Gordon Murray display panel'), panel: 'black', fit: 'contain' }
    ]
  },
  {
    slug: 'esab',
    title: 'ESAB',
    category: 'Interactive Application',
    year: '2024',
    thumb: thumb('esab.jpg'),
    client: 'ESAB',
    services: 'UI/UX design, interactive development',
    link: null,
    linkLabel: null,
    intro: "A cutting-edge interactive application designed for ESAB, a global leader in welding and cutting equipment. The application provides an immersive experience showcasing ESAB's innovative products and technologies, allowing users to explore their features and benefits in detail.",
    video: '/video/esab.mp4',
    mobileVideo: '/video/mobile/esab.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('esab-01.png', 'ESAB interactive application overview'), aspect: '16 / 9' },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'tight',
        items: [
          { shot: shot('esab-02.png', 'ESAB interactive interface') },
          { shot: shot('esab-03.png', 'ESAB application detail') }
        ]
      },
      { type: 'video' },
      { type: 'full', shot: shot('esab-04.png', 'ESAB product exploration'), aspect: '16 / 9' }
    ]
  },
  {
    slug: 'magna',
    title: 'Magna',
    category: 'Automotive HMI',
    year: '2023',
    thumb: thumb('magna.jpg'),
    client: 'Magna',
    services: 'UI/UX design, interaction design, prototyping',
    link: 'https://www.magna.com/',
    linkLabel: 'View project',
    intro: "A sophisticated automotive HMI solution for Magna, one of the world's leading automotive suppliers. This project focuses on creating an advanced cockpit experience that integrates cutting-edge technology with human-centered design principles, resulting in an intuitive and engaging interface for next-generation vehicles.",
    video: '/video/magna.mp4',
    mobileVideo: '/video/mobile/magna.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('magna-thumb.png', 'Magna automotive HMI overview'), aspect: '16 / 9' },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'tight',
        items: [
          { shot: shot('magna-02.png', 'Magna automotive interface') },
          { shot: shot('magna-03.png', 'Magna dashboard design') }
        ]
      },
      { type: 'video' },
      { type: 'full', shot: shot('magna-4.png', 'Magna cockpit experience'), aspect: '16 / 9' },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'tight',
        items: [
          { shot: shot('magna-01.png', 'Magna HMI concept') },
          { shot: shot('magna-5.jpg', 'Magna interface detail') }
        ]
      }
    ]
  },
  {
    slug: 'volvo-group-ar',
    title: 'Volvo Group AR',
    category: 'Augmented Reality',
    year: '2020',
    thumb: thumb('volvo-group-ar.jpg'),
    client: 'Volvo Group',
    services: 'AR development, UI/UX design, interactive media',
    link: null,
    linkLabel: null,
    intro: "An innovative augmented reality experience developed for Volvo Group's Ocean Race exhibition. This interactive AR application allows visitors to explore Volvo's maritime technologies and contributions to sustainable ocean racing through immersive digital content overlaid on physical exhibits, creating an engaging and educational experience.",
    video: '/video/volvo-group-ar.mp4',
    mobileVideo: '/video/mobile/volvo-group-ar.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('volvo-group-ar-hero.jpg', 'Volvo Group Ocean Race AR experience'), aspect: '16 / 9' },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'tight',
        items: [
          { shot: shot('volvo-group-ar-play1.jpg', 'Volvo Group AR interactive play') },
          { shot: shot('volvo-group-ar-play2.jpg', 'Volvo Group AR exhibition moment') }
        ]
      },
      { type: 'video', aspect: '16 / 9' },
      { type: 'full', shot: shot('volvo-group-ar-ex9.jpg', 'Volvo Group exhibition environment'), aspect: '16 / 9' },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'tight',
        items: [
          { shot: shot('volvo-group-ar-play5.jpg', 'Volvo Group AR play interaction') },
          { shot: shot('volvo-group-ar-play6.jpg', 'Volvo Group AR play detail') }
        ]
      },
      {
        type: 'grid', cols: 2, aspect: '1 / 1', gap: 'tight',
        items: [
          { shot: shot('volvo-group-ar-ex7.jpg', 'Volvo Group exhibition installation') },
          { shot: shot('volvo-group-ar-ex11.jpg', 'Volvo Group exhibition display') }
        ]
      }
    ]
  },
  {
    slug: 'geely-motors',
    title: 'Geely Motors',
    category: 'Automotive HMI',
    year: '2020',
    thumb: thumb('geely-motors.jpg'),
    client: 'Geely Motors',
    services: 'UI/UX design, interaction design, prototyping',
    link: null,
    linkLabel: null,
    intro: 'An innovative automotive HMI design for Geely Motors that reimagines the in-car user experience. This project delivers a seamless integration of cutting-edge technology and intuitive design, creating a user-centric interface that enhances the driving experience while ensuring safety and accessibility.',
    video: '/video/geely-motors.mp4',
    mobileVideo: '/video/mobile/geely-motors.mp4',
    galleryGap: 'tight',
    layout: [
      { type: 'full', shot: shot('geely-motors-thumb.png', 'Geely Motors HMI overview') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('geely-motors-02.png', 'Geely Motors interface') },
          { shot: shot('geely-motors-03.png', 'Geely Motors dashboard') }
        ]
      },
      { type: 'video' },
      { type: 'full', shot: shot('geely-motors-4.png', 'Geely Motors HMI screen') },
      {
        type: 'grid', cols: 2, gap: 'tight',
        items: [
          { shot: shot('geely-motors-5.png', 'Geely Motors UI detail') },
          { shot: shot('geely-motors-6.png', 'Geely Motors interface study') }
        ]
      }
    ]
  }
].map((project) => {
  // Flatten gallery shots for SEO/OG (first image) and any consumers expecting project.gallery
  const gallery = [];
  for (const block of project.layout) {
    if (block.shot) gallery.push(block.shot);
    if (block.items) {
      for (const item of block.items) {
        if (item.shot) gallery.push(item.shot);
      }
    }
  }
  return { ...project, gallery };
});

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

/** More Works cycle matches iamjaydesign (excludes volvo-safety-only page). */
const moreWorksCycle = projects.filter((project) => project.slug !== 'volvo-safety-retail-ar');

export function projectNeighbours(slug) {
  if (slug === 'volvo-safety-retail-ar') {
    return {
      previous: projectBySlug['geely-motors'],
      next: projectBySlug['world-of-volvo']
    };
  }
  const index = Math.max(0, moreWorksCycle.findIndex((project) => project.slug === slug));
  return {
    previous: moreWorksCycle[(index - 1 + moreWorksCycle.length) % moreWorksCycle.length],
    next: moreWorksCycle[(index + 1) % moreWorksCycle.length]
  };
}
