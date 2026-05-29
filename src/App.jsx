import React, { useState } from "react";
import {
  FolderOpen,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  FileText,
  MapPin,
  Phone,
  Mail,
  Globe,
  UploadCloud,
  FileIcon,
  ImageIcon,
  Download,
  Plus,
  Share2,
  Globe2,
  Play,
} from "lucide-react";
// --- MOCK DATA V2 ---
const DOCUMENTS_V2 = [
  {
    id: 1,
    title: "Usaha Pengembangan Madrasah",
    subheadings: [
      {
        id: "1.1",
        title: "Mengembangkan madrasah sesuai kebutuhan",
        files: [
          {
            id: 101,
            name: "rencana-kerja-madrasah-2024.pdf",
            type: "PDF",
            size: "2.4 MB",
            date: "10 Des 2024",
          },
          {
            id: 102,
            name: "foto-rapat-pengembangan.jpg",
            type: "IMG",
            size: "1.1 MB",
            date: "11 Des 2024",
          },
          {
            id: 103,
            name: "sk-tim-pengembangan-madrasah.pdf",
            type: "PDF",
            size: "800 KB",
            date: "12 Des 2024",
          },
        ],
      },
      {
        id: "1.2",
        title: "Mengelola perubahan dan pengembangan madrasah",
        files: [
          {
            id: 104,
            name: "laporan-perubahan-kurikulum.docx",
            type: "DOCX",
            size: "1.5 MB",
            date: "15 Des 2024",
          },
        ],
      },
      {
        id: "1.3",
        title: "Mengelola hubungan antara madrasah and masyarakat",
        files: [],
      },
      { id: "1.4", title: "Mengelola proses pencapaian 8 SNP", files: [] },
      { id: "1.5", title: "Mengelola unit layanan khusus madrasah", files: [] },
      { id: "1.6", title: "Mengelola sistem informasi madrasah", files: [] },
    ],
  },
  {
    id: 2,
    title: "Pelaksanaan Tugas Manajerial",
    subheadings: [
      { id: "2.1", title: "Menyusun perencanaan madrasah", files: [] },
      { id: "2.2", title: "Mengelola standar nasional pendidikan", files: [] },
    ],
  },
  { id: 3, title: "Pengembangan Kewirausahaan", subheadings: [] },
  { id: 4, title: "Supervisi Guru & Tenaga Kependidikan", subheadings: [] },
  { id: 5, title: "Hasil Kinerja Kepala Madrasah", subheadings: [] },
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

const KemenagLogo = ({
  className = "w-28 h-28",
  showText = true,
  minimal = false,
}) => {
  const svgContent = (
    <svg viewBox="0 0 100 100" className={className}>
      <polygon
        points="50,3 95,36 78,88 22,88 5,36"
        fill="#1A4731"
        stroke="#C8961E"
        strokeWidth="3"
      />
      <polygon
        points="50,8 90,38 75,83 25,83 10,38"
        fill="#1E6B45"
        stroke="#C8961E"
        strokeWidth="1"
      />
      <polygon
        points="50,15 53,23 62,23 55,28 57,36 50,31 43,36 45,28 38,23 47,23"
        fill="#FFD700"
      />
      <path
        d="M 28,60 C 24,52 28,40 36,32"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 4"
      />
      <path
        d="M 72,60 C 76,52 72,40 64,32"
        fill="none"
        stroke="#C8961E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 36,54 C 42,48 48,54 50,56 C 52,54 58,48 64,54 L 64,44 C 58,38 52,44 50,46 C 48,44 42,38 36,44 Z"
        fill="#FFFBEB"
        stroke="#C8961E"
        strokeWidth="1"
      />
      <path d="M 50,46 L 50,56" stroke="#C8961E" strokeWidth="1" />
      <path
        d="M 42,56 L 58,66 M 58,56 L 42,66"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 20,73 Q 50,81 80,73 L 75,80 Q 50,87 25,80 Z"
        fill="#FFFFFF"
        stroke="#C8961E"
        strokeWidth="1"
      />
      <text
        x="50"
        y="78.5"
        fontSize="4.2"
        fontWeight="bold"
        fill="#1A4731"
        textAnchor="middle"
        letterSpacing="0.2"
      >
        IKHLAS BERAMAL
      </text>
    </svg>
  );

  if (minimal) return svgContent;

  return (
    <div className="flex flex-col items-center justify-center group cursor-pointer">
      <div className="relative p-2 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105">
        {svgContent}
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

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
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
                    Lihat Semua Kategori
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
                      <span className="truncate">
                        Dokumen {doc.id} — {doc.title.split(" ")[0]}...
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="font-medium text-[#64748B] hover:text-[#1A4731] h-full transition-colors">
              Tentang
            </button>
          </div>

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
              Semua Kategori Dokumen
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
                <FolderOpen className="w-4 h-4 mr-2 text-[#C8961E]" /> Dokumen{" "}
                {doc.id}
              </button>
            ))}
          </div>
          <button className="block w-full text-left font-medium text-[#64748B] py-2">
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

        <div>
          <h3 className="font-bold text-[#1E293B] mb-4 text-base">
            Dokumen PKKM
          </h3>
          <ul className="space-y-2 text-[#64748B] text-sm">
            {DOCUMENTS_V2.slice(0, 4).map((doc) => (
              <li key={doc.id}>
                <button className="hover:text-[#1A4731] transition-colors">
                  Dokumen {doc.id} — {doc.title}
                </button>
              </li>
            ))}
            <li>
              <button className="hover:text-[#1A4731] transition-colors">
                Dokumen 5 — Hasil Kinerja...
              </button>
            </li>
          </ul>
        </div>

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
          <KemenagLogo className="w-28 h-28" />
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
          Tahun Pelajaran 2024/2025 • MIN 5 TANGERANG (MIN Legok)
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
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-auto pt-6 pb-2 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-sm text-green-100/80">
        <p className="mb-4 sm:mb-0 font-medium tracking-wide">
          © 2025 MIN 5 TANGERANG
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="flex items-center hover:text-white hover:-translate-y-1 transition-all duration-300 group"
          >
            <Share2 className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium text-green-100/90 group-hover:text-white">
              MIN 5 Tangerang
            </span>
          </a>
          <a
            href="#"
            className="flex items-center hover:text-white hover:-translate-y-1 transition-all duration-300 group"
          >
            <Globe2 className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium text-green-100/90 group-hover:text-white">
              @min5tangerang
            </span>
          </a>
          <a
            href="#"
            className="flex items-center hover:text-white hover:-translate-y-1 transition-all duration-300 group"
          >
            <Play className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline font-medium text-green-100/90 group-hover:text-white">
              MIN 5 TV
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const DocumentsOverviewView = ({ setCurrentPage }) => (
  <div className="animate-in fade-in zoom-in-95 duration-500 bg-[#F4F6F9] min-h-[calc(100vh-64px)] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs sm:text-sm text-[#64748B] mb-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-[#1A4731] font-medium transition-colors"
          >
            Beranda
          </button>
          <span className="mx-2">/</span>
          <span className="text-[#1E293B] font-medium">Kategori Dokumen</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-gray-200 pb-5">
          <h2 className="text-3xl font-bold text-[#1E293B]">Dokumen PKKM</h2>
          <span className="text-[#64748B] text-sm font-medium mt-2 sm:mt-0 bg-gray-200 px-3 py-1 rounded-full">
            5 Kategori Utama
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DOCUMENTS_V2.map((doc) => {
          const totalFiles = doc.subheadings.reduce(
            (acc, sub) => acc + (sub.files ? sub.files.length : 0),
            0,
          );
          return (
            <div
              key={doc.id}
              className="bg-white rounded-xl p-6 shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-[#1A4731] transition-colors">
                    <FolderOpen
                      className="w-6 h-6 text-[#C8961E] group-hover:text-white transition-colors"
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#64748B] tracking-wider mb-1">
                    DOKUMEN {doc.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B] leading-tight mb-2 group-hover:text-[#1A4731] transition-colors">
                    {doc.title}
                  </h3>
                  <div className="text-sm text-[#64748B] font-medium flex items-center">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs mr-2">
                      {doc.subheadings.length} Sub-topik
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      {totalFiles} File
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-grow">
                <p className="text-xs font-semibold text-[#64748B] mb-3 uppercase tracking-wider">
                  Pratinjau Topik:
                </p>
                <ul className="space-y-2 mb-6">
                  {doc.subheadings.slice(0, 3).map((sub) => (
                    <li
                      key={sub.id}
                      className="text-sm text-[#1E293B] flex items-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8961E] mt-1.5 mr-2 shrink-0"></span>
                      <span className="line-clamp-1">
                        {sub.id} {sub.title}
                      </span>
                    </li>
                  ))}
                  {doc.subheadings.length > 3 && (
                    <li className="text-sm text-[#64748B] italic pl-3.5">
                      + {doc.subheadings.length - 3} lainnya
                    </li>
                  )}
                  {doc.subheadings.length === 0 && (
                    <li className="text-sm text-gray-400 italic">
                      Belum ada sub-topik
                    </li>
                  )}
                </ul>
              </div>
              <button
                onClick={() => setCurrentPage(`doc_${doc.id}`)}
                className="w-full py-2.5 bg-[#F4F6F9] border border-[#E2E8F0] text-[#1A4731] rounded-lg font-semibold hover:bg-[#1A4731] hover:text-white transition-colors flex justify-center items-center"
              >
                Buka Dokumen <ChevronRight className="ml-1.5 w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const SubheadingItem = ({ sub, isExpanded, onToggle }) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileCount = sub.files ? sub.files.length : 0;

  const getFileBadge = (type) => {
    switch (type) {
      case "PDF":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-100 text-[#DC2626] border border-red-200">
            PDF
          </span>
        );
      case "IMG":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-[#2563EB] border border-blue-200">
            IMG
          </span>
        );
      case "DOCX":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-[#16A34A] border border-green-200">
            DOCX
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
            {type}
          </span>
        );
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5 text-[#DC2626]" />;
      case "IMG":
        return <ImageIcon className="w-5 h-5 text-[#2563EB]" />;
      case "DOCX":
        return <FileIcon className="w-5 h-5 text-[#16A34A]" />;
      default:
        return <FileIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="border border-[#E2E8F0] rounded-xl overflow-hidden mb-3 bg-white shadow-sm transition-all">
      <div
        className={`flex items-start sm:items-center justify-between p-4 cursor-pointer transition-colors ${isExpanded ? "bg-[#F0FAF4] border-b border-[#E2E8F0]" : "hover:bg-[#F4F6F9]"}`}
        onClick={onToggle}
      >
        <div className="flex items-start flex-1 pr-4">
          <div className="mt-0.5 mr-3 text-[#1A4731]">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </div>
          <div>
            <h4 className="font-semibold text-[#1E293B] text-[15px] sm:text-base leading-snug">
              {sub.id} {sub.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {fileCount} file tersedia
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!isExpanded) onToggle();
            setIsUploading(!isUploading);
          }}
          className="flex items-center px-3 py-1.5 border border-[#E2E8F0] bg-white text-[#1A4731] rounded-md text-xs font-medium hover:bg-[#1A4731] hover:text-white transition-colors shrink-0"
        >
          <Plus className="w-3.5 h-3.5 mr-1" /> Upload
        </button>
      </div>
      {isExpanded && (
        <div className="bg-white">
          {isUploading && (
            <div className="p-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <div className="border-2 border-dashed border-[#CBD5E1] rounded-lg p-6 bg-white hover:bg-[#F0FAF4] hover:border-[#1A4731] transition-colors group text-center cursor-pointer relative">
                <UploadCloud className="w-8 h-8 text-[#94A3B8] mx-auto mb-2 group-hover:text-[#1A4731]" />
                <p className="text-sm font-medium text-[#1E293B]">
                  Drag & drop file ke sini
                </p>
                <p className="text-xs text-[#64748B] mt-1">
                  atau klik untuk pilih file (PDF, JPG, PNG, DOCX - Maks 50MB)
                </p>
                <p className="text-[10px] text-[#94A3B8] italic mt-3 bg-gray-50 inline-block px-2 py-1 rounded">
                  Nama file otomatis mengikuti nama asli dari perangkat Anda.
                </p>
              </div>
              <div className="flex justify-end mt-3 space-x-2">
                <button
                  onClick={() => setIsUploading(false)}
                  className="px-3 py-1.5 text-xs font-medium text-[#64748B] hover:bg-gray-200 rounded"
                >
                  Batal
                </button>
                <button className="px-3 py-1.5 text-xs font-medium bg-[#1A4731] text-white rounded hover:bg-[#1E6B45]">
                  Upload File
                </button>
              </div>
            </div>
          )}
          <div className="divide-y divide-[#E2E8F0]">
            {fileCount > 0 ? (
              sub.files.map((file, idx) => (
                <div
                  key={idx}
                  className="p-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group"
                >
                  <div className="flex items-center flex-1 min-w-0 pr-4">
                    <div className="mr-3 p-2 bg-gray-50 rounded-lg group-hover:bg-white border border-transparent group-hover:border-gray-200 transition-all">
                      {getFileIcon(file.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center mb-1 space-x-2">
                        {getFileBadge(file.type)}
                        <p className="text-sm font-medium text-[#1E293B] truncate">
                          {file.name}
                        </p>
                      </div>
                      <p className="text-xs text-[#64748B] flex items-center">
                        {file.size} <span className="mx-1.5">•</span>{" "}
                        {file.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-[#1A4731] bg-transparent hover:bg-green-50 p-2 rounded-lg border border-transparent hover:border-[#1A4731]/30 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-sm text-[#94A3B8] italic">
                  Belum ada file di folder ini.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const DocumentView = ({ docId, setCurrentPage }) => {
  const currentDoc =
    DOCUMENTS_V2.find((d) => d.id === parseInt(docId)) || DOCUMENTS_V2[0];
  const totalSubheadings = currentDoc.subheadings.length;
  const totalFiles = currentDoc.subheadings.reduce(
    (acc, sub) => acc + (sub.files ? sub.files.length : 0),
    0,
  );
  const [expandedSubs, setExpandedSubs] = useState({ 1.1: true });

  const toggleSub = (id) =>
    setExpandedSubs((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="bg-[#F4F6F9] min-h-[calc(100vh-64px)] pb-16">
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-[#64748B]">
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
              Dokumen {currentDoc.id}
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex-1 max-w-4xl">
            <div className="bg-[#F0FAF4] rounded-xl border border-[#E2E8F0] border-l-4 border-l-[#1A4731] p-5 sm:p-6 mb-8 flex items-start shadow-sm">
              <FolderOpen
                className="w-10 h-10 text-[#C8961E] mr-4 hidden sm:block shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <div className="text-xs font-bold text-[#1A4731] tracking-wider mb-1 flex items-center">
                  <FolderOpen
                    className="w-4 h-4 mr-1.5 sm:hidden inline"
                    strokeWidth={2}
                  />{" "}
                  DOKUMEN {currentDoc.id}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-2 leading-tight">
                  {currentDoc.title}
                </h1>
                <p className="text-sm text-[#64748B] font-medium flex items-center">
                  {totalSubheadings} sub-topik <span className="mx-2">•</span>{" "}
                  {totalFiles} file tersedia
                </p>
              </div>
            </div>
            <div className="space-y-1">
              {currentDoc.subheadings.length > 0 ? (
                currentDoc.subheadings.map((sub) => (
                  <SubheadingItem
                    key={sub.id}
                    sub={sub}
                    isExpanded={!!expandedSubs[sub.id]}
                    onToggle={() => toggleSub(sub.id)}
                  />
                ))
              ) : (
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-12 text-center text-[#64748B]">
                  Konten dokumen ini sedang dalam tahap penyusunan.
                </div>
              )}
            </div>
          </div>
          <div className="hidden xl:block w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.07)] border border-[#E2E8F0] p-5 sticky top-24">
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-4 pb-3 border-b border-gray-100">
                Navigasi Cepat
              </h3>
              <div className="space-y-1">
                {DOCUMENTS_V2.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setCurrentPage(`doc_${doc.id}`)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${currentDoc.id === doc.id ? "bg-[#1A4731] text-white shadow-sm" : "text-[#64748B] hover:bg-gray-100 hover:text-[#1E293B]"}`}
                  >
                    <span className="w-5 text-center mr-2 opacity-60 font-bold">
                      {doc.id}.
                    </span>
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
        {currentPage.startsWith("doc_") && (
          <DocumentView
            docId={currentPage.split("_")[1]}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
      {currentPage !== "home" && <Footer />}
    </div>
  );
}
