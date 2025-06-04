import './App.css';

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
  const sections = [
    {
      title: "Création de compte",
      phones: [
        {
          description: "Étape 1: Accédez à la page d'inscription",
          imagePath: "/images/createBook/etape1.png"
        },
        {
          description: "Étape 2: Remplissez vos informations",
          imagePath: "/images/createBook/etape2.png"
        },
        {
          description: "Étape 3: Vérifiez votre email",
          imagePath: "/images/createBook/etape3.png"
        },
        {
          description: "Étape 4: Confirmez votre compte",
          imagePath: "/images/createBook/etape4.png"
        },
        {
          description: "Étape 5: Configurez votre profil",
          imagePath: "/images/createBook/etape5.png"
        },
        {
          description: "Étape 6: Votre compte est prêt",
          imagePath: "/images/createBook/etape6.png"
        }
      ]
    },
    {
      title: "Création d'une œuvre",
      phones: [
        {
          description: "Étape 1: Accédez à la page de création",
          imagePath: "/images/search/1.png"
        },
        {
          description: "Étape 2: Choisissez votre style",
          imagePath: "/images/search/2.png"
        }
      ]
    },
    {
      title: "Gestion du profil",
      phones: [
        {
          description: "Étape 1: Accédez à vos paramètres",
          imagePath: "/images/update_delete/1.png"
        },
        {
          description: "Étape 2: Modifiez vos informations",
          imagePath: "/images/update_delete/2.png"
        },
        {
          description: "Étape 3: Mettez à jour votre profil",
          imagePath: "/images/update_delete/3.png"
        },
        {
          description: "Étape 4: Supprimez des éléments",
          imagePath: "/images/update_delete/4.png"
        },
        {
          description: "Étape 5: Confirmez les modifications",
          imagePath: "/images/update_delete/5.png"
        }
      ]
    },
    {
      title: "Interactions",
      phones: [
        {
          description: "Étape 1: Découvrez des œuvres",
          imagePath: "/images/read/1.png"
        },
        {
          description: "Étape 2: Explorez les détails",
          imagePath: "/images/read/2.png"
        },
        {
          description: "Étape 3: Interagissez avec le contenu",
          imagePath: "/images/read/3.png"
        }
      ]
    }
  ];

  return (
    <div className="App">
      <h1 className="main-title">ToonBook</h1>

      {sections.map((section, index) => (
        <div key={index} className="section">
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
    </div>
  );
}

export default App;
