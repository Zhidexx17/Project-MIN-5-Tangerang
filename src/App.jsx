import React, { useState } from "react";
import logoImage from "./assets/Logo.png";
import {
  FolderOpen,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Target,
  BookOpen,
  Award,
  ArrowLeft,
} from "lucide-react";

// --- MOCK DATA V2 (REFACTORED) ---
const DOCUMENTS_V2 = [
  {
    id: 1,
    title: "1. Usaha Pengembangan Madrasah",
    desc: "Buku kerja dan bukti fisik perencanaan, pelaksanaan, serta evaluasi program pengembangan madrasah secara berkelanjutan.",
    embedUrl:
      "https://1drv.ms/f/c/c2186077387f815b/IgAey93x5NuFR7dJCgTE5osFAXGWxVNr8AyDBgnehm-MJMs?e=sjtjKw",
  },
  {
    id: 2,
    title: "2. Pelaksanaan Tugas Manajerial",
    desc: "Dokumen terkait manajemen standar nasional pendidikan, kelembagaan, dan pengelolaan sumber daya administrasi.",
    embedUrl:
      "https://1drv.ms/f/c/c2186077387f815b/IgAW13NePHeGT5WX17-6PAAuAem4a4juEsOamlqrzcEPG98?e=mlWV6c",
  },
  {
    id: 3,
    title: "3. Pengembangan Kewirausahaan",
    desc: "Inovasi, kerja keras, dan pantang menyerah dalam menciptakan peluang serta mengembangkan madrasah.",
    embedUrl: "",
  },
  {
    id: 4,
    title: "4. Supervisi Guru & Tenaga Kependidikan",
    desc: "Program, instrumen, pelaksanaan, dan tindak lanjut supervisi akademik terhadap pendidik dan tenaga kependidikan.",
    embedUrl: "",
  },
  {
    id: 5,
    title: "5. Hasil Kinerja Kepala Madrasah",
    desc: "Prestasi dan capaian hasil kerja dari kepala madrasah yang telah diraih selama masa tugas.",
    embedUrl: "",
  },
];

// --- STYLES CONFIG ---
const colors = {
  primary: "#1A4731",
  primaryLight: "#1E6B45",
  accent: "#C8961E",
  bg: "#F4F6F9",
  surface: "#FFFFFF",
  textMain: "#1E293B",
  textSec: "#64748B",
  border: "#E2E8F0",
};

// Edit these links to point to your official social pages
const SOCIAL_LINKS = {
  facebook: "https://facebook.com/min5tangerang",
  instagram: "https://instagram.com/min5tangerang",
  youtube: "https://youtube.com/@min5tangerang",
};

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M14 8.5V7c0-.8.5-1 1-1h2V3h-3c-2.2 0-4 1.8-4 4v1.5H8V12h2v9h4v-9h2.5l.5-3.5H14Z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M11 10.2v3.6L14.2 12 11 10.2Z" fill="currentColor" />
  </svg>
);

// --- KOMPONEN LOGO KEMENAG KUSTOM (MIN LEGOK KAB. TANGERANG) ---
const KemenagLogo = ({
  className = "w-28 h-28",
  showText = true,
  minimal = false,
}) => {
  const logoElement = (
    <img
      src={logoImage}
      alt="Logo MIN 5 Tangerang"
      className={`${className} object-contain`}
    />
  );

  if (minimal) return logoElement;

  return (
    <div className="flex flex-col items-center justify-center group cursor-pointer">
      <div className="relative p-2 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105">
        {logoElement}
      </div>
      {showText && (
        <div className="text-center mt-3">
          <h2 className="text-base font-bold tracking-wider text-white uppercase font-sans">
            MIN Legok
          </h2>
          <p className="text-xs font-semibold text-[#C8961E]">Kab. Tangerang</p>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTS ---

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Brand */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div className="w-10 h-10 mr-3 shrink-0 flex items-center justify-center">
              <KemenagLogo className="w-10 h-10" minimal={true} />
            </div>
            <div className="h-8 border-l border-gray-300 mr-3 hidden sm:block"></div>
            <div>
              <h1 className="font-bold text-[#1E293B] text-base sm:text-lg leading-tight">
                MIN 5 TANGERANG
              </h1>
              <p className="text-[10px] sm:text-xs text-[#64748B] hidden sm:block">
                MIN Legok Kab. Tangerang
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`font-medium ${currentPage === "home" ? "text-[#1A4731] border-b-2 border-[#1A4731]" : "text-[#64748B] hover:text-[#1A4731]"} h-full transition-colors`}
            >
              Beranda
            </button>

            <div className="relative group h-full flex items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`font-medium flex items-center ${currentPage.startsWith("doc") || currentPage === "documents" ? "text-[#1A4731] border-b-2 border-[#1A4731] h-full pt-0.5" : "text-[#64748B] hover:text-[#1A4731] h-full pt-0.5"} transition-colors`}
              >
                Dokumen <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                  <button
                    onClick={() => {
                      setCurrentPage("documents");
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center w-full text-left px-4 py-2.5 text-sm font-semibold text-[#1A4731] bg-green-50 hover:bg-green-100 border-b border-gray-100"
                  >
                    Lihat Semua Dokumen
                  </button>
                  {DOCUMENTS_V2.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setCurrentPage(`doc_${doc.id}`);
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center w-full text-left px-4 py-2.5 text-sm text-[#1E293B] hover:bg-[#F4F6F9] hover:text-[#1A4731] group"
                    >
                      <FolderOpen className="w-4 h-4 mr-3 text-[#C8961E] group-hover:text-[#1A4731]" />
                      <span className="truncate">{doc.title}...</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setCurrentPage("about")}
              className={`font-medium ${currentPage === "about" ? "text-[#1A4731] border-b-2 border-[#1A4731]" : "text-[#64748B] hover:text-[#1A4731]"} h-full transition-colors`}
            >
              Tentang
            </button>
          </div>

          {/* Mobile Menu Btn */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1E293B] p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg absolute w-full left-0 z-50">
          <button
            onClick={() => {
              setCurrentPage("home");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left font-medium text-[#1A4731] py-2"
          >
            Beranda
          </button>
          <div className="border-l-2 border-[#1A4731] pl-3 space-y-3 mt-2">
            <button
              onClick={() => {
                setCurrentPage("documents");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left font-semibold text-[#1A4731] py-1.5"
            >
              Semua Dokumen
            </button>
            {DOCUMENTS_V2.map((doc) => (
              <button
                key={doc.id}
                onClick={() => {
                  setCurrentPage(`doc_${doc.id}`);
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full text-left text-sm text-[#1E293B] py-1.5"
              >
                <FolderOpen className="w-4 h-4 mr-2 text-[#C8961E]" />
                {doc.title}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setCurrentPage("about");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left font-medium text-[#64748B] py-2"
          >
            Tentang
          </button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white pt-12 border-t border-[#E2E8F0]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1 */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 mr-3 shrink-0 flex items-center justify-center">
              <KemenagLogo className="w-8 h-8" minimal={true} />
            </div>
            <h2 className="font-bold text-[#1E293B] text-lg">
              MIN 5 TANGERANG
            </h2>
          </div>
          <p className="text-[#64748B] text-sm leading-relaxed pr-4">
            Kementerian Agama <br />
            Tangerang, Banten
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="font-bold text-[#1E293B] mb-4 text-base">
            Sosial Media
          </h3>
          <ul className="space-y-3 text-[#64748B] text-sm">
            <li>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#1A4731] transition-colors group"
              >
                <FacebookIcon className="w-4 h-4 mr-2 text-[#1A4731] shrink-0" />
                <span>MIN 5 Tangerang</span>
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#1A4731] transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 mr-2 text-[#1A4731] shrink-0" />
                <span>@min5tangerang</span>
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#1A4731] transition-colors group"
              >
                <YoutubeIcon className="w-4 h-4 mr-2 text-[#1A4731] shrink-0" />
                <span>MIN 5 TV</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="font-bold text-[#1E293B] mb-4 text-base">
            Hubungi Kami
          </h3>
          <ul className="space-y-3 text-[#64748B] text-sm">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 text-[#1A4731] shrink-0" />{" "}
              Jl. Pendidikan, Tangerang
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-[#1A4731] shrink-0" /> (021)
              55XXXX
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-[#1A4731] shrink-0" />{" "}
              admin@min5tangerang.sch.id
            </li>
            <li className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-[#1A4731] shrink-0" />{" "}
              min5tangerang.sch.id
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-[#1A4731] py-4 text-center text-xs text-white/70">
      © 2025 MIN 5 TANGERANG — Kementerian Agama Tangerang
    </div>
  </footer>
);

// --- VIEW 1: LANDING PAGE (HERO ONLY) ---
const HomeView = ({ setCurrentPage }) => (
  <div className="animate-in fade-in duration-500 bg-[#F4F6F9] flex flex-col min-h-[calc(100vh-64px)]">
    <div className="bg-gradient-to-br from-[#1A4731] to-[#1E6B45] text-white py-10 px-4 relative overflow-hidden flex-grow flex flex-col">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-5 pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex-grow flex flex-col justify-center py-10">
        <div className="flex justify-center mb-8">
          <KemenagLogo className="w-35 h-35" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight drop-shadow-md">
          PORTAL DOKUMEN PKKM
        </h1>
        <h2 className="text-xl md:text-2xl text-green-100 font-medium mb-3">
          Penilaian Kinerja Kepala Madrasah
        </h2>
        <p className="text-sm md:text-base text-green-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Sistem arsip digital terpadu untuk pengumpulan dan verifikasi bukti
          fisik. <br className="hidden sm:block" />
          Tahun Pelajaran 2025/2026 • MIN 5 TANGERANG (MIN Legok)
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => setCurrentPage("documents")}
            className="px-8 py-3.5 border-2 border-white/90 text-[#1A4731] bg-white rounded-lg font-bold hover:bg-green-50 hover:scale-105 transition-all duration-300 flex items-center shadow-xl"
          >
            Lihat Dokumen <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Social Media & Info Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-auto pt-6 pb-2 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-sm text-green-100/80">
        <p className="mb-4 sm:mb-0 font-medium tracking-wide">
          © 2026 MIN 5 TANGERANG
        </p>

        <div className="flex items-center space-x-6">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white hover:-translate-y-1 transition-all duration-300 group"
          >
            <FacebookIcon className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium text-green-100/90 group-hover:text-white">
              MIN 5 Tangerang
            </span>
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white hover:-translate-y-1 transition-all duration-300 group"
          >
            <InstagramIcon className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium text-green-100/90 group-hover:text-white">
              @min5tangerang
            </span>
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white hover:-translate-y-1 transition-all duration-300 group"
          >
            <YoutubeIcon className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium text-green-100/90 group-hover:text-white">
              MIN 5 TV
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// --- VIEW 2: DAFTAR KATEGORI DOKUMEN ---
const DocumentsOverviewView = ({ setCurrentPage }) => (
  <div className="animate-in fade-in zoom-in-95 duration-500 bg-[#F4F6F9] min-h-[calc(100vh-64px)] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Header */}
      <div className="mb-10">
        <p className="text-xs sm:text-sm text-[#64748B] mb-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-[#1A4731] font-medium transition-colors"
          >
            Beranda
          </button>
          <span className="mx-2">/</span>
          <span className="text-[#1E293B] font-medium">Dokumen</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-gray-200 pb-5">
          <h2 className="text-3xl font-bold text-[#1E293B]">Dokumen PKKM</h2>
          <span className="text-[#64748B] text-sm font-medium mt-2 sm:mt-0 bg-gray-200 px-3 py-1 rounded-full">
            Dokumen
          </span>
        </div>
      </div>

      {/* Documents Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOCUMENTS_V2.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl p-6 shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-[#1A4731] transition-colors">
                  <FolderOpen
                    className="w-6 h-6 text-[#C8961E] group-hover:text-white transition-colors"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1E293B] leading-tight group-hover:text-[#1A4731] transition-colors">
                  {doc.title}
                </h3>
              </div>
            </div>

            <div className="mt-2 flex-grow mb-6">
              <p className="text-sm text-[#64748B] leading-relaxed">
                {doc.desc}
              </p>
            </div>

            <button
              onClick={() => setCurrentPage(`doc_${doc.id}`)}
              className="w-full py-2.5 bg-[#F4F6F9] border border-[#E2E8F0] text-[#1A4731] rounded-lg font-semibold hover:bg-[#1A4731] hover:text-white transition-colors flex justify-center items-center mt-auto"
            >
              Buka Dokumen <ChevronRight className="ml-1.5 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- VIEW 3: DOKUMEN (REDIRECT ONEDRIVE) ---
const DocumentView = ({ docId, setCurrentPage }) => {
  const currentDoc =
    DOCUMENTS_V2.find((d) => d.id === parseInt(docId)) || DOCUMENTS_V2[0];
  const hasDocumentLink = Boolean(currentDoc.embedUrl);

  const handleOpenDocument = () => {
    if (!hasDocumentLink) return;

    window.open(currentDoc.embedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#F4F6F9] min-h-[calc(100vh-64px)] pb-16">
      {/* Breadcrumb Area */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-base text-[#64748B] font-medium leading-none">
            <button
              onClick={() => setCurrentPage("home")}
              className="hover:text-[#1A4731] font-medium"
            >
              Beranda
            </button>
            <span className="mx-2">/</span>
            <button
              onClick={() => setCurrentPage("documents")}
              className="hover:text-[#1A4731] font-medium"
            >
              Dokumen PKKM
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#1E293B] font-medium">
              {currentDoc.title}
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-300">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-5">
              <button
                onClick={() => setCurrentPage("documents")}
                className="inline-flex items-center gap-3 rounded-xl border border-[#BFD8C7] bg-[#F1FAF4] px-5 py-3 text-base font-semibold text-[#1A4731] shadow-sm hover:border-[#1A4731] hover:bg-[#E7F5EC] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Kembali
              </button>
            </div>

            {/* Header Card */}
            <div className="bg-[#F0FAF4] rounded-xl border border-[#E2E8F0] border-l-4 border-l-[#1A4731] p-6 sm:p-7 mb-6 flex items-start shadow-sm">
              <FolderOpen
                className="w-11 h-11 text-[#C8961E] mr-4 hidden sm:block shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <div className="text-xs font-bold text-[#1A4731] tracking-wider mb-1 flex items-center">
                  <FolderOpen
                    className="w-5 h-5 mr-1.5 sm:hidden inline"
                    strokeWidth={2}
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-2 leading-tight">
                  {currentDoc.title}
                </h1>
                <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed">
                  {currentDoc.desc}
                </p>
              </div>
            </div>

            {/* Dokument Info Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.06)] p-7 sm:p-12 min-h-[440px] flex items-center justify-center">
              <div className="max-w-3xl w-full text-center rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F9FBFD] px-6 py-11 sm:px-12 sm:py-16">
                <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-[#FFF7E6] mb-5">
                  <FolderOpen
                    className="w-12 h-12 text-[#C8961E]"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-3 leading-tight">
                  Dokumen tersedia di Cloud Penyimpanan OneDrive Resmi.
                </h3>
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto">
                  Silakan klik tombol di bawah untuk memeriksa, membaca, dan
                  mengunduh seluruh bukti fisik secara transparan.
                </p>

                <button
                  onClick={handleOpenDocument}
                  disabled={!hasDocumentLink}
                  className={`mt-6 inline-flex items-center gap-2 mx-auto ${hasDocumentLink ? "bg-[#1A4731] hover:bg-[#1E6B45] text-white font-bold px-9 py-5 rounded-xl shadow-lg transition-all" : "bg-gray-300 text-gray-600 font-bold px-9 py-5 rounded-xl cursor-not-allowed"}`}
                >
                  <FolderOpen className="w-6 h-6" />
                  {hasDocumentLink
                    ? "Buka Dokumen di Tab Baru"
                    : "Tautan dokumen belum dikonfigurasi"}
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar Navigation */}
          <div className="hidden xl:block w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] p-5 sticky top-24">
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-4 pb-3 border-b border-gray-100">
                Navigasi Cepat
              </h3>
              <div className="space-y-1">
                {DOCUMENTS_V2.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setCurrentPage(`doc_${doc.id}`)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                      currentDoc.id === doc.id
                        ? "bg-[#1A4731] text-white shadow-sm"
                        : "text-[#64748B] hover:bg-gray-100 hover:text-[#1E293B]"
                    }`}
                  >
                    <span className="truncate">{doc.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- VIEW 4: TENTANG (ABOUT PAGE - PROFIL MIN 5 TANGERANG) ---
const AboutView = ({ setCurrentPage }) => (
  <div className="animate-in fade-in zoom-in-95 duration-500 bg-[#F4F6F9] min-h-[calc(100vh-64px)] py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Header */}
      <div className="mb-10 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-[#64748B] mb-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-[#1A4731] font-medium transition-colors"
          >
            Beranda
          </button>
          <span className="mx-2">/</span>
          <span className="text-[#1E293B] font-medium">Tentang Madrasah</span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-3">
          Tentang MIN 5 TANGERANG
        </h2>
        <p className="text-[#64748B] text-sm sm:text-base max-w-2xl">
          Mengenal lebih dekat profil, visi, dan misi Madrasah Ibtidaiyah Negeri
          5 Tangerang (MIN Legok).
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {/* Card 1: Profil Madrasah */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] hover:shadow-md transition-shadow">
          <div className="flex items-center mb-5 border-b border-gray-100 pb-4">
            <div className="w-12 h-12 bg-[#F0FAF4] rounded-xl flex items-center justify-center mr-4 shrink-0">
              <BookOpen className="w-6 h-6 text-[#1A4731]" />
            </div>
            <h3 className="text-xl font-bold text-[#1E293B]">
              Profil Madrasah
            </h3>
          </div>
          <p className="text-[#64748B] leading-relaxed text-sm sm:text-base text-justify">
            Madrasah Ibtidaiyah Negeri (MIN) 5 Tangerang, yang sebelumnya
            dikenal luas oleh masyarakat luas sebagai <strong>MIN Legok</strong>
            , adalah lembaga pendidikan tingkat dasar berciri khas agama Islam
            yang diselenggarakan di bawah naungan Kementerian Agama Republik
            Indonesia. Kami berkomitmen untuk menyelenggarakan pendidikan dasar
            yang berkualitas dengan memadukan kurikulum pendidikan nasional dan
            pendidikan keagamaan (Islam) secara terpadu dan komprehensif.
          </p>
        </div>

        {/* Card 2: Visi & Misi */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] hover:shadow-md transition-shadow">
          <div className="flex items-center mb-5 border-b border-gray-100 pb-4">
            <div className="w-12 h-12 bg-[#F0FAF4] rounded-xl flex items-center justify-center mr-4 shrink-0">
              <Target className="w-6 h-6 text-[#1A4731]" />
            </div>
            <h3 className="text-xl font-bold text-[#1E293B]">Visi & Misi</h3>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-[#1A4731] text-lg mb-2">Visi:</h4>
            <p className="text-[#1E293B] text-sm sm:text-base italic bg-[#F4F6F9] p-4 rounded-lg border-l-4 border-[#C8961E]">
              "Terwujudnya Peserta Didik yang Unggul dalam Prestasi, Berakhlakul
              Karimah, Terampil, Mandiri, dan Berwawasan Lingkungan Berpijak
              pada Nilai-Nilai Ajaran Islam."
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1A4731] text-lg mb-3">Misi:</h4>
            <ul className="space-y-3 text-[#64748B] text-sm sm:text-base list-disc pl-5">
              <li>
                Menyelenggarakan proses pembelajaran yang aktif, inovatif,
                kreatif, efektif, dan menyenangkan (PAIKEM).
              </li>
              <li>
                Membentuk karakter peserta didik yang Islami melalui pembiasaan
                ibadah dan implementasi akhlak mulia dalam kehidupan
                sehari-hari.
              </li>
              <li>
                Mengembangkan potensi kecerdasan intelektual, emosional, dan
                spiritual peserta didik secara seimbang.
              </li>
              <li>
                Menumbuhkembangkan semangat keunggulan secara intensif kepada
                seluruh warga madrasah.
              </li>
              <li>
                Menjalin kerja sama yang harmonis antara madrasah, orang tua
                murid, dan masyarakat lingkungan sekitar.
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Keunggulan & Dedikasi */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] hover:shadow-md transition-shadow">
          <div className="flex items-center mb-5 border-b border-gray-100 pb-4">
            <div className="w-12 h-12 bg-[#F0FAF4] rounded-xl flex items-center justify-center mr-4 shrink-0">
              <Award className="w-6 h-6 text-[#1A4731]" />
            </div>
            <h3 className="text-xl font-bold text-[#1E293B]">
              Dedikasi Pendidikan
            </h3>
          </div>
          <p className="text-[#64748B] leading-relaxed text-sm sm:text-base text-justify">
            Didukung oleh tenaga pendidik (guru) yang kompeten, profesional, dan
            berdedikasi tinggi, MIN 5 Tangerang terus berinovasi dalam
            memberikan layanan pendidikan terbaik bagi masyarakat. Kami
            menyediakan fasilitas pembelajaran yang representatif guna menunjang
            keberhasilan anak didik meraih cita-citanya.
          </p>
        </div>

        {/* Card 4: Identitas Instansi */}
        <div className="bg-[#1A4731] text-white rounded-xl p-6 sm:p-8 shadow-md relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="mb-6 sm:mb-0 sm:mr-8 shrink-0">
              <KemenagLogo className="w-24 h-24" minimal={true} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                MIN 5 TANGERANG
              </h3>
              <p className="text-green-100 font-medium mb-1">
                Madrasah Ibtidaiyah Negeri Legok
              </p>
              <p className="text-green-200/80 text-sm mb-4">
                Kabupaten Tangerang, Provinsi Banten
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-50/90 mt-4">
                <p className="flex items-center justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 mr-2 opacity-80" /> Jl. Pendidikan,
                  Tangerang
                </p>
                <p className="flex items-center justify-center sm:justify-start">
                  <Phone className="w-4 h-4 mr-2 opacity-80" /> (021) 55XXXX
                </p>
                <p className="flex items-center justify-center sm:justify-start">
                  <Mail className="w-4 h-4 mr-2 opacity-80" />{" "}
                  admin@min5tangerang.sch.id
                </p>
                <p className="flex items-center justify-center sm:justify-start">
                  <Globe className="w-4 h-4 mr-2 opacity-80" />{" "}
                  min5tangerang.sch.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#1E6B45] selection:text-white bg-[#F4F6F9]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow flex flex-col">
        {currentPage === "home" && <HomeView setCurrentPage={setCurrentPage} />}
        {currentPage === "documents" && (
          <DocumentsOverviewView setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "about" && (
          <AboutView setCurrentPage={setCurrentPage} />
        )}
        {currentPage.startsWith("doc_") && (
          <DocumentView
            docId={currentPage.split("_")[1]}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>

      {/* Footer tidak tampil di Landing Page (home) */}
      {currentPage !== "home" && <Footer />}
    </div>
  );
}
