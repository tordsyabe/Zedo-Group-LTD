import fabien from './assests/corporate-governance/fabien-ciciulla.jpg';
import blank from './assests/corporate-governance/blank.png';
import michael from './assests/corporate-governance/michael-ebsary.png';

const data = [
  {
    group: 'Leadership Team',
    profile: [
      {
        profileId: 1,
        name: 'Betrand Prezioso',
        position: 'Chairman',
        image: blank,
        contents: [
          'Founded Promar in 2002, serves as Executive Chairman.',
          'Previously a Director of Sovchart SA for 8 years, a subsidiary of AKP Sovcomflot, an international shipping company. Chartering manager in charge of Suez Max and Afra Max (25 vessels worlwide).',
          'Chairman and co-founder of Equadis SA, a European leading information system company servicing the food industry.',
          'Chairman and co-founder of GlobalStar Holding SA.',
          'Served as a board member of the Prezioso Group, the world’s largest insulation, fireproofing and coating company.'
        ]
      },
      {
        profileId: 2,
        name: 'Fabien Ciciulla',
        position: 'General Manager',
        image: fabien,
        contents: ['No content.']
      }
    ]
  },
  {
    group: 'Advisory Board',
    profile: [
      {
        profileId: 3,
        name: 'Michael Ebsary',
        position: 'Chair',
        image: michael,
        contents: [
          'Mr. Michael S. Ebsary, also known as Mike, serves as the Chief Financial Officer for investments at The Addax & Oryx Group Limited and covers the upstream, downstream and mining activities of the group. Mr. Ebsary served as the Chief Executive Officer of Oryx Petroleum Corporation Limited since September 2010 until March 2016, which Mr. Ebsary co-founded in 2010.',
          'Mr. Ebsary has 25 years’ experience in the petroleum industry and served management positions at Elf, Occidental and Addax Petroleum. Mr. Ebsary served as the Chief Financial Officer of Addax Petroleum Corp. since 1999. Mr. Ebsary joined Addax Petroleum Corp. in 1998. He worked for a number of oil companies.',
          "Mr. Ebsary worked at the Bank of Nova Scotia from 1986 to 1987 and the Bank of Montreal from 1987 to 1989. He joined the international upstream oil business with Occidental in London in 1989. He served as a Treasurer of Elf Petroleum UK since 1991. Since 1994, he served at Elf's head office in Paris as Senior Manager of Project Finance, where he was responsible for major project financings in emerging markets, particularly in Nigeria, Chad and Cameroon.",
          "He served as a Director of Oryx Petroleum Corporation Limited since December 2012. Mr. Ebsary served as a Director of AXMIN Inc. since March 2002. Mr. Ebsary served as a Director of Carpathian Gold Inc., from October 17, 2003 to December 31, 2005. Mr. Ebsary studied Mathematics and Statistics. He has an MBA in Finance and Accounting from Queen's University at Kingston, Canada."
        ]
      },
      {
        profileId: 4,
        name: 'Geoffroy Fontaine',
        position: 'Secretary',
        image: blank,
        contents: [
          'Geoffroy Fontaine joined Promar Shipping Services SA as Legal Counsel in September 2011.',
          'He started his career in various law firms in Paris. From September 2007 to May 2008, he assisted Broström Tankers SAS (then Maersk Tankers France SAS) as a member of the legal department, mainly involved in charter parties’ review, corporate and ship finance issues.',
          'After joining the Paris Bar in January 2008, he worked as an associate for Reed Smith LLP in Paris in the Shipping and International Trade group. During his career as an avocat, he advised clients in the shipping industry as well as investors in Africa, in close relation with the London office of the firm. His main practices focused on commercial disputes and international arbitration.',
          'He has managed the legal department of Promar Shipping SA since February 2014 and was promoted to Chief Legal Officer in June 2016.',
          'He left Promar’s executive management in April 2019 to set up Teste Consulting, a consulting company.',
          'He has been part of Zedo Group Limited’s advisory board since its inception.',
          "He holds a Master in International Business Law from the University Paris 1 (Panthéon – Sorbonne) and the Certificate of Professional Qualification from the Paris Bar (Certificat d'aptitude à la profession d'avocat - CAPA)."
        ]
      }
    ]
  }
];

const zedo = [
  {
    group: 'Leadership Team',
    profile: [
      {
        profileId: 1,
        name: 'Fabien Ciciulla',
        position: 'General Manager',
        image: fabien,
        contents: ['No content.']
      }
    ]
  }
];

const promar = [
  {
    group: 'Leadership Team',
    profile: [
      {
        profileId: 6,
        name: 'Eric Verriere',
        position: 'CEO',
        image: blank,
        contents: [
          'Joined Promar Sept 2018 as C.E.O.',
          'C.E.O. of Bourbon Offshore Surf from 2008 to 2018, managing the most important affiliate of Bourbon worldwide (90 vessels, 3,000 employees).',
          'General Manager of Sonasurf from 2005 to 2008, JV between Bourbon and Sonangol, (65 vessels, 900 employees).',
          'QHSE Manager Bourbon Offshore Surf from 2001 to 2005, implementing SMS and Quality certification. Master degree in Quality management.',
          'Captain in Bourbon and Care Offshore, worldwide experience on AHTS from 1989 to 2001.'
        ]
      },
      {
        profileId: 7,
        name: 'Alexis Giry',
        position: 'CFO',
        image: blank,
        contents: [
          'Joined Promar in August 2018 as Chief Financial Officer.',
          'Previously worked as Chief Financial Officer, Management Board and Executive Committee Member at Bureau van Dijk Electronic Publishing for 10 years. Participation to 3 LBOs and one trade sale to Moody’s Analytics company in 2017 (Eur 3bn selling price).',
          'Finance manager of Perenco from 2005 to 2008 leading a team of four finance managers and a deputy finance manager of the subsidiaries in South America.',
          'Group Financial controller of Perenco Africa from 2001 to 2005.',
          'From 1996 to 2001 various audit experiences and senior accounting consultant providing ad hoc assistance for international companies.'
        ]
      }
    ]
  }
];

export function getDatas() {
  return data;
}

export function getZedos() {
  return zedo;
}

export function getPromars() {
  return promar;
}

export function getData(id) {
  return data.find(x => x.profile.profileId === id);
}
