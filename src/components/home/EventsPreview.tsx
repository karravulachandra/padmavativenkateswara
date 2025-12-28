import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const upcomingEvents = [
  { date: "1 Dec", month: "2025", title: "Mokshada / Vaikuntha Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "15 Dec", month: "2025", title: "Saphala Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "30 Dec", month: "2025", title: "Pausha Putrada Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "14 Jan", month: "2026", title: "Shattila Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "29 Jan", month: "2026", title: "Jaya Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "13 Feb", month: "2026", title: "Vijaya Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "27 Feb", month: "2026", title: "Amalaki Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "15 Mar", month: "2026", title: "Papamochani Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "29 Mar", month: "2026", title: "Kamada Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "13 Apr", month: "2026", title: "Varuthini Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "27 Apr", month: "2026", title: "Mohini Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "12 May", month: "2026", title: "Apara Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "27 May", month: "2026", title: "Padmini Ekadashi (Adhik)", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "11 Jun", month: "2026", title: "Parama Ekadashi (Adhik)", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "25 Jun", month: "2026", title: "Nirjala Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "10 Jul", month: "2026", title: "Yogini Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "25 Jul", month: "2026", title: "Devshayani (Ashadhi) Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "9 Aug", month: "2026", title: "Kamika Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "24 Aug", month: "2026", title: "Putrada Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "8 Sep", month: "2026", title: "Aja Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "23 Sep", month: "2026", title: "Parsva / Vamana Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "8 Oct", month: "2026", title: "Indira Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "23 Oct", month: "2026", title: "Papankusha Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "6 Nov", month: "2026", title: "Rama Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "20 Nov", month: "2026", title: "Devutthana / Prabodhini Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },

  { date: "6 Dec", month: "2026", title: "Utpanna Ekadashi", description: "Ekadashi observance", type: "Ekadashi" },
  { date: "20 Dec", month: "2026", title: "Mokshada", description: "Ekadashi observance", type: "Ekadashi" },
];

export const EventsPreview = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"english" | "telugu" | null>(null);

  const ENGLISH_TEXT = `Om Namo Venkatesaya

Sri Srinivasa Govinda
Sri Venkatesa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Bhakthavathsalaa Govinda
Bhagavathapriya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Nithyanirmala Govinda
Neelameghashyama Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Puranapurusha Govinda
Pumdarikaksha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Namdha Namdhanaa Govinda
Navaneetha Chora Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Pashupaalaka Shri Govinda
Paapavimochana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Dhushtasamhara Govinda
Dhuritha Nivaarana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Shishtaparipaalaka Govinda
Kashtanivaarana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Vajramakutadhara Govinda
Varahamurthivi Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Gopi Lola Govinda
Govardhanodhara Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Dhasharadhanamdhana Govinda
Dhashamukhamardhana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Pakshivahana Govinda
Pandavapriya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Madhusudhana Hari Govinda
Mahima swaroopa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Venuganapriya Govinda
Venkataramana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Seetha nayaka Govinda
Sritha paripalaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Anadha Rakshaka Govinda
Aapath bhamdhava Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Saranagathavatsala Govinda
Karunasagara Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Kamaladhalaksha Govinda
Kamithaphaladha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Papavinashaka Govinda
Pahimurare Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Sri mudhramkitha Govinda
Sri vathsamkitha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Dharaneenayaka Govinda
Dhinakaratheja Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Padhmavathi Priya Govinda
Prasannamurth Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Abhaya murthi Govinda
Asritha Varada Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Shankhu chakradhara Govinda
Shaarjagadhadhara Govinda
Virajatheerasdha Govinda
Virodhi Mardhana Govinda

Virajateerthasta Govinda
Virodhimardhana Govinda
Virajatheerasdha Govinda
Virodhi Mardhana Govinda

Salagramadhara Govinda
Sahasranama Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Lakshmeevallabha Govinda
Lakshmanagraja Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Kasthoorithilaka Govinda
Kamchanambaradhara Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Vanarasaevitha Govinda
Varadhibamdhana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Annadana Priya Govinda
Annamayya Vinutha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Asritharaksha Govinda
Ananta Vinuta Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Dharmasamsthapaka Govinda
Dhanalakshmi Priya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Eka swaroopa Govinda
Loka Rakshaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Vengamambanutha Govinda
Vedachalasthitha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Ramakrishna hari Govinda
Raghukula nanadana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Vajrakavachadhara Govinda
Vasudevatanaya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Bilvapatrarchitha Govinda
Bhikshusamstutha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Brahmandaroopa Govinda
Bhaktarakshaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Nithyakalyana Govinda
Neerajanabha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Hatheramapriya Govinda
Harisarvothama Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Janardhanamurthy Govinda
Jagathsakshiroopa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Abhishaekapriya Govinda
Aapannivarana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Ratnakireeta Govinda
Ramanujanutha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Swayamprakasa Govinda
Sarvakarana Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Nityasubhaprada Govinda
Nikhila Lokesa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Anandaroopa Govinda
Adyantharahitha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Ihaparadayaka Govinda
Ibharajarakshaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Garudadri Vasa Govinda
Neeladri Nilaya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Anjaneedreesa Govinda
Vrushabhadri vasa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Tirumalavasa Govinda
Tulasimala Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Sheshadhrinilayaa Govinda
Shreyodayaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Paramadayalo Govinda
Padmanabhahari Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Garudavahana Govinda
Gajarajarakshaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Sapthagirisa Govinda
Ekasvaroopa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Prathyakshadhevaa Govinda
Paramadhayakara Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Vaddikasulavada Govinda
Vasudhevathanaya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Stri Pumroopa Govinda
Shivakaeshava Moorthi Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Seshasayene Govinda
Seshadri Nilaya Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Annadanapriya Govinda
Asritharaksha Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Varaha Narasimha Govinda
Vamanabrugurama Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Balaramanuja Govinda
Baudhakalkidhara Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Dharidhra janaposhaka Govinda
Dharma samsthapaka Govinda
Govinda Hari Govinda
Gokulanandana Govinda

vajramakutadhara Govinda
Vyjayanthimala Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Sri Srinivasa Govinda
Sri Venkatesa Govinda
Govinda Hari Govinda
Gokulanandana Govinda

Ithi Sri Venkateswara Govinda Namavali Sampoornam ||`;

  const TELUGU_TEXT = `శ్రీ శ్రీనివాసా గోవిందా |
శ్రీ వేంకటేశా గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

భక్తవత్సలా గోవిందా |
భాగవతప్రియ గోవిందా |
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

నిత్యనిర్మలా గోవిందా |
నీలమేఘశ్యామ గోవిందా |
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

పురాణపురుషా గోవిందా |
పుండరీకాక్ష గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

నందనందనా గోవిందా |
నవనీతచోర గోవిందా |
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

పశుపాలక శ్రీ గోవిందా |
పాపవిమోచన గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

దుష్టసంహార గోవిందా |
దురితనివారణ గోవిందా |
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

శిష్టపరిపాలక గోవిందా |
కష్టనివారణ గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

వజ్రమకుటధర గోవిందా |
వరాహమూర్తి గోవిందా |
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

గోపీ లోల గోవిందా |
గోవర్ధనోద్ధార గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

దశరథనందన గోవిందా |
దశముఖమర్దన గోవిందా |
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

పక్షివాహన గోవిందా |
పాండవప్రియ గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

మధుసూదన హరి గోవిందా |
మహిమ స్వరూప గోవింద ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

వేణుగానప్రియ గోవిందా |
వేంకటరమణా గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

సీతానాయక గోవిందా |
శ్రితపరిపాలక గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

అనాథరక్షక గోవిందా |
ఆపද්బాంధవ గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

శరణాగతవత్సల గోవిందా |
కరుణాసాగర గోవిందా ||
గోవిందా హరి గొవిందా |
గోకులనందన గోవిందా ||

కమలదళాక్ష గోవిందా |
కామితఫలదా గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

పాపవినాశక గోవిందా |
పాహి మురారె గోవిందా ||
గోవిందా హరి గొవిందా |
గోకులనందన గోవిందా ||

శ్రీముద్రాంకిత గోవిందా |
శ్రీవత్సాంకిత గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

ధరణీనాయక గోవిందా |
దినకరతెజా గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా |

పద్మావతిప్రియ గోవిందా |
ప్రసన్నమూర్తి గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

అభయ మూర్తి గోవింద |
ఆశ్రీత వరద గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

శంఖచక్రధర గోవిందా |
శార్ఙ్గగదాధర గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

విరజాతీర్థస్థ గోవిందా |
విరోధిమర్దన గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

సాలగ్రామధర గోవిందా |
సహస్రనామా గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

లక్ష్మీవల్లభ గోవిందా |
లక్ష్మణాగ్రజ గోవిందా ||
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

కస్తూరితిలక గోవిందా |
కాంచనాంబర గోవిందా ||
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

వానరసేవిత గోవిందా |
వారధి బంధన గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

అన్నదాన ప్రియ గోవిందా |
అన్నమయ్య వినుత గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

ఆశ్రీత రక్షా గోవింద |
అనంత వినుత గోవిందా ||
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

ధర్మసంస్థాపక గోవిందా |
ధనలక్ష్మి ప్రియ గోవిందా ||
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

ఏక స్వరూపా గొవిద |
లోక రక్షకా గోవింద ||
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

వెంగమాంబనుత గోవింద
వేదాచలస్థిత గోవిందా
గోవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

రామకృష్ణా హరి గోవిందా |
రఘుకులనందన గోవిందా ||
గొవిందా హరి గోవిందా |
గోకులనందన గోవిందా ||

వజ్రకవచధర గోవిందా |
వసుదేవ తరనయ గొవిందా ||
గొవిందా హరి గొవిందా |
గొకులనందన గోవిందా ||

బిల్వపత్రార్చిత గోవిందా |
భిక్షుకసంస్తుత గోవిందా ||
గొవిందా హరి గోవిందా |
గొకులనందన గోవిందా ||

బ్రహ్మాండరూపా గోవిందా |
భక్తరక్షక గొవిందా ||
గొవిందా హరి גోవిందా |
గొకులనందన గోవిందా ||

నిత్యకళ్యాణ గోవిందా |
నీరజనాభ గొవిందా ||
గొవిందా హరి గొవిందా |
గొకులనందన గోవిందా ||

ఇతి శ్రీ వెంకటేశ్వర గోవింద నామావళి సంపూర్ణం ||`;
  return (
    <section className="py-24 bg-cream-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              Sacred Calendar
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mt-4">
              Upcoming Events
            </h2>
          </div>
          <Link to="/events" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              View All Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
        {/* (Govinda Namalu buttons and modal will appear after the Ekadashi notice) */}

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-gold/10 hover:border-gold/30 h-full">
                {/* Date Header */}
                <div className="bg-maroon p-4 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="font-display text-3xl font-bold text-gold relative z-10">
                    {event.date}
                  </p>
                  <p className="text-primary-foreground/70 text-sm relative z-10">
                    {event.month}
                  </p>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="inline-block bg-gold/20 text-gold text-xs px-3 py-1 rounded-full font-medium mb-3">
                    {event.type}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-maroon mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Ekadashi Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-maroon/5 border border-maroon/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-maroon" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-maroon">
                Monthly Ekadashi Schedule
              </h4>
              <p className="text-muted-foreground text-sm">
                Special darshan and rituals on every Ekadashi
              </p>
            </div>
          </div>
          <Button variant="divine">
            Download Calendar
          </Button>
        </motion.div>
      
          {/* Govinda Namalu Buttons (placed after Monthly Ekadashi Notice) */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setLang("telugu");
                setOpen(true);
              }}
            >
              Telugu Govinda Namalu
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setLang("english");
                setOpen(true);
              }}
            >
              English Govinda Namalu
            </Button>
          </div>

          {/* Modal for Govinda Namalu */}
          <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {lang === "telugu" ? "Telugu Govinda Namalu" : "English Govinda Namalu"}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <div className="max-h-[60vh] overflow-auto text-sm whitespace-pre-wrap mt-2">
                  {lang === "telugu" ? TELUGU_TEXT : ENGLISH_TEXT}
                </div>
              </DialogDescription>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
      </div>
    </section>
  );
};
