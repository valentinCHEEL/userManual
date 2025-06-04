import './App.css';
import { useRef, useState, useEffect } from 'react';

function PhoneFrame({ description, imagePath }) {
  return (
    <div>
      <div className="phone-frame">
        <div className="phone-content">
          <img
            src={imagePath}
            alt={description}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              backgroundColor: '#f5f5f5',
              padding: '10px'
            }}
          />
        </div>
      </div>
      <p className="phone-description">{description}</p>
    </div>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sections = [
    {
      id: "creation",
      title: "Création d'une oeuvre",
      phones: [
        {
          description: "Étape 1: Aller dans la page bibliothèque puis cliquer sur le bouton Mes œuvres",
          imagePath: "/images/createBook/etape1.png"
        },
        {
          description: "Étape 2: Cliquer sur le bouton Nouvelle création",
          imagePath: "/images/createBook/etape2.png"
        },
        {
          description: "Étape 3: Choissez entre une oeuvre graphique ou une oeuvre littéraire",
          imagePath: "/images/createBook/etape3.png"
        },
        {
          description: "Étape 4: Remplissez le formulaire",
          imagePath: "/images/createBook/etape4.png"
        },
        {
          description: "Étape 5: Si vous avez choisi une oeuvre graphique vous pouvez ajouter les images/planche de votre oeuvre",
          imagePath: "/images/createBook/etape5.png"
        },
        {
          description: "Étape 6: Si vous avez choisi une oeuvre littéraire vous pouvez ajouter le texte de votre oeuvre",
          imagePath: "/images/createBook/etape6.png"
        }
      ]
    },
    {
      id: "recherche",
      title: "Recherche d'une oeuvre",
      phones: [
        {
          description: "Étape 1: Accédez à la page recherche",
          imagePath: "/images/search/1.png"
        },
        {
          description: "Étape 2: Pour trouvez le livre que vous cherchez, vous pouvez utiliser le filtre par titre et ainsi trouver le livre que vous cherchez",
          imagePath: "/images/search/2.png"
        }
      ]
    },
    {
      id: "gestion",
      title: "Gestion de ses ouvres",
      phones: [
        {
          description: "Étape 1: Accédez aux menu création puis cliquez sur le bouton Mes œuvres",
          imagePath: "/images/update_delete/1.png"
        },
        {
          description: "Étape 2: Retrouver vos oeuvres supprimer avec l'icone rouge ou modifier avec l'icone vers",
          imagePath: "/images/update_delete/2.png"
        },
        {
          description: "Étape 3: Modifier les informations de votre oeuvre",
          imagePath: "/images/update_delete/3.png"
        },
        {
          description: "Étape 4: Modifier le contenu de votre oeuvre litteraire",
          imagePath: "/images/update_delete/4.png"
        },
        {
          description: "Étape 5: Modifer le contenu de votre oeuvre graphique",
          imagePath: "/images/update_delete/5.png"
        }
      ]
    },
    {
      id: "lecture",
      title: "Lire une oeuvre",
      phones: [
        {
          description: "Étape 1: Découvrez des œuvres dans la bibliothèque ou dans la recherche choisissez une oeuvre et cliquez",
          imagePath: "/images/read/1.png"
        },
        {
          description: "Étape 2: Selectionner un chapitre",
          imagePath: "/images/read/2.png"
        },
        {
          description: "Étape 3: Vous pouvez maintenant lire votre oeuvre",
          imagePath: "/images/read/3.png"
        }
      ]
    }
  ];

  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <h1 className="main-title">ToonBook</h1>
      <p className="main-description">Bienvenu sur le manuelle utilisateur de ToonBook,
        vous trouverez ici toutes les étapes pour utiliser l'application.
        Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter par mail à l'adresse suivante : toonbook@gmail.com
      </p>

      <div className="table-of-contents">
        <h2>Sommaire</h2>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className="section"
          ref={el => sectionRefs.current[section.id] = el}
          id={section.id}
        >
          <h2 className="section-title">{section.title}</h2>
          <div className="phones-container">
            {section.phones.map((phone, phoneIndex) => (
              <PhoneFrame
                key={phoneIndex}
                description={phone.description}
                imagePath={phone.imagePath}
              />
            ))}
          </div>
        </div>
      ))}

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
