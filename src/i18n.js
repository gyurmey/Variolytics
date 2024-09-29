import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: 'en',
        saveMissing: true,
        resources: {
            en: {
                translation: {
                    Organisation : "Organisation",
                    Projects : "Projects",
                    DevicesDeployed: "Devices Deployed",
                    NeedsAttention: "Needs Attention",
                    SelectInterval : "Select Interval",
                    All : "All",
                    DateRange : 'Date Range',
                    StartTime : "Start Time",
                    EndTime : "End Time",
                    Filter :  "Filter",
                    Download : "Download",
                    Dashboard : "Dashboard",
                    LiveViewer : "LiveViewer",
                    Overview : "Overview",
                    Management : "Management",
                    Analysis : "Analysis",
                    Authorization : "Authorization",
                    System :"System",
                    Security : "Security",
                    Username : 'Username',
                    LoginHere : "Login Here",
                    LogIn : "Log In",
                    MEASURINGPOINT : "MEASURING POINT {{num}} CONCENTRATION",
                    MEASURINGPOINTEMISSIONS : "MEASURING POINT {{num}} EMISSIONS",
                    MeasuringPoint : "Measuring Point {{num}} Concentration",
                    Temperature : "Temperature",
                    Flowrate : "Flowrate",
                    ScatterChart : "Scatter Chart",
                    TenantName : "Tenant Name",
                    Looksgood : "Looks good",
                    Superiorname : "Superior name",
                    ChooseUsername : "Please choose a username.",
                    ProvideValidEmail : "Please provide a valid Email",
                    DisplayName : "Display Name",
                    PhoneNumber : "Phone Number",
                    ProvideValidPhoneNumber : "Please provide a valid Phone Number.",
                    Save : "Save",
                    Agreetotermsandconditions : "Agree to terms and conditions",
                    Youmustagreebeforesubmitting : "You must agree before submitting.",
                    ChangePassword : "Change Password",
                    Profile :  "Profile",
                    Password : "Password",
                    PleaseprovideavalidPassword : "Please provide a valid Password.",
                    invalidemailaddress : "You have entered an invalid email address!",
                    NewPassword : "New Password",
                    OldPassword : "Old Password",
                    logout : "Log Out"
                }
            },
            de: {
                translation: {
                    Organisation : "Organisation",
                    Projects : "Projekte",
                    DevicesDeployed : "Bereitgestellte Geräte",
                    NeedsAttention: "Braucht Aufmerksamkeit",
                    SelectInterval : "Wählen Sie Intervall",
                    All : "Alle",
                    DateRange : "Datumsbereich",
                    StartTime : "Startzeit",
                    EndTime : "Endzeit",
                    Filter : "Filter",
                    Download : "Herunterladen",
                    Dashboard : "Dashboard",
                    LiveViewer : "LiveViewer",
                    Overview  :  "Überblick",
                    Management : "Management",
                    Analysis : "Analyse",
                    Authorization : "Genehmigung",
                    System :"System",
                    Security : "Sicherheit",
                    Username : "Benutzername",
                    LoginHere : "Melden Sie sich hier an",
                    LogIn : "Einloggen",
                    MEASURINGPOINT : "MESSSTELLE {{num}} KONZENTRATION",
                    MEASURINGPOINTEMISSIONS : "MESSSTELLE {{num}} EMISSIONEN",
                    MeasuringPoint : "Messpunkt {{num}} Konzentration",
                    Temperature : "Temperatur",
                    Flowrate : "Durchflussrate",
                    ScatterChart : "Streudiagramm",
                    TenantName : "Name des Mieters",
                    Looksgood : "Sieht gut aus",
                    Superiorname : "Überlegener Name",
                    ChooseUsername : "Bitte wählen Sie einen Benutzernamen.",
                    ProvideValidEmail : "Bitte geben Sie eine gültige E-Mail-Adresse an",
                    DisplayName : "Anzeigename",
                    PhoneNumber : "Telefonnummer",
                    ProvideValidPhoneNumber : "Bitte geben Sie eine gültige Telefonnummer an.",
                    Save : "Speichern",
                    Agreetotermsandconditions : "Akzeptieren Sie die Allgemeinen Geschäftsbedingungen",
                    Youmustagreebeforesubmitting : "Sie müssen vor dem Absenden zustimmen.",
                    ChangePassword : "Kennwort ändern",
                    Profile : "Profil",
                    Password : "Kennwort",
                    PleaseprovideavalidPassword : "Bitte geben Sie ein gültiges Passwort ein.",
                    invalidemailaddress : "Sie haben eine ungültige E-Mail-Adresse eingegeben!",
                    NewPassword : "Neue Kennwort",
                    OldPassword : "Allte Kennwort",
                    logout : "Abmelden"


                }
            }
        }
    })