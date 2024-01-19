export const AdatLeiro = {
  nev: {
    megjelenes: "Név",
    tipus: "text",
    placeholder: "Jóska Pista",
    pattern:"^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{3,} [A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{3,}$",
    required: true,
    value: "",
  },
  email: {
    megjelenes: "E-mail",
    tipus: "text",
    placeholder: "joskapista@validemail.nem",
    pattern: "^[a-z0-9]{3,}@[a-z]{3,}.[a-z]{2,3}$",
    required: true,
    value: "",
  },

  szul_hely: {
    megjelenes: "Születési hely",
    tipus: "text",
    placeholder: "Kisbajom",
    pattern: "^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{3,}$",
    required: true,
    value: "",
  },

  szul_ev: {
    megjelenes: "Születési év",
    tipus: "number",
    required: true,
    value: 1995,
    min: 1900,
    max: 2024,
  },
};

export const fejlec = {
  felh_id: "Azonosító",
  nev: "Név",
  email: "E-mail",
  szul_hely: "Születési hely",
  szul_ev: "Születési év",
  created_at: "Ekkor készült",
  updated_at: "Ekkor frissült",
};
