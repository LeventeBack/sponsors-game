// array of objects
// each object has 2 properties:
// 		data: data represented on the modal
// 		vendor: the information about sponsor/vendor the image data and the room's ID
// ********
//  data = {
//    name: The company's name
//    logo: The absolute path to the company's logo
//    description: The company's description
//    url: The link of the website
//    pdf: The absolute path to the company's pdf download link
//    video: HTML iframe of the company's video from youtube
//    color: The color of the header
//  }
//  vendor = {
//    These properties will be specified exactly when the development finishes
//  }
export const companies = [
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "teacher",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "it",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "teacher",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "it",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "teacher",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "it",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Hochschule_Deggendorf_Logo.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "teacher",
      position: 0,
      stand: "1",
      speech: "Lessgoo",
    },
  },
  {
    data: {
      name: "Technische Hochschule Deggendorf",
      logo: "/assets/img/companies/Thalia_logo_RGB_c_positive_raster.png",
      description: `<p>
        Die Technische Hochschule Deggendorf (THD) wurde 1994 gegründet und zählt zu den innovativen Vorreitern der bayerischen Hochschullandschaft. Sie ist Triebfeder der regionalen Wirtschaft in Ostbayern. An zahlreichen Forschungs- und Technologie Campus leben wir unser Konzept der Regionalisierung von Forschung. Industrie und Kommunen sind dabei unsere Partner. Gemeinsam gestalten wir den Transfer von Wissen und Technologie – nachhaltig und erfolgreich.
        Die acht Fakultäten und das Zentrum für Akademische Weiterbildung bieten knapp 70 verschiedene Bachelor- und Masterstudiengänge aus den Bereichen Wirtschaftswissenschaften, Ingenieurwissenschaften, Informatik, angewandte Naturwissenschaften sowie Gesundheitswissenschaften an. An der Fakultät European Campus Rottal-Inn (ECRI), werden international ausgerichtete Bachelor- und Masterstudiengänge in den Bereichen Gesundheitswissenschaften, Tourismus und Technik angeboten. Derzeit studieren rund 8000 junge Menschen an den Studienstandorten Deggendorf, Pfarrkirchen und Cham. Über 30 Prozent davon sind internationale Studierende.
        </p>
        <p>Die THD zählt zu den forschungsstärksten Hochschulen für Angewandte Wissenschaften in Bayern. Das wissenschaftliche Profil mit den Aktionsfeldern Digital, Mobil, Gesund und Nachhaltig wird durch vier interdisziplinäre Forschungsschwerpunkte geprägt: “Digitale Wirtschaft & Gesellschaft“, “Intelligente Mobilität“, “Nachhaltiges Wirtschaften, Innovative Werkstoffe & Energie“ sowie “Innovative Arbeitswelt & Gesundheit“.</p>`,
      url: "https://www.th-deg.de",
      pdf: "",
      chat: "",
      timetable: `Der Chat ist zu diesen Zeiten besetzt: <br>
                  Mittwoch 14-16 Uhr <br>
                  Donnerstag 14-16 Uhr <br>
                  Freitag 14-16 Uhr <br>`,
      video: `<iframe src="https://www.youtube.com/embed/Ndh-kpmngE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      color: "#009FE3",
    },
    vendor: {
      roomId: 5,
      character: "lab",
      position: 7,
      stand: 3,
      speech: "This is a longer text so I can test out weather is working ",
    },
  },
];
