import React, { useState, useEffect } from 'react';
import AnimatedSection from './components/AnimatedSection';
import StaggeredGrid from './components/StaggeredGrid';
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Target, 
  Award, 
  BookOpen, 
  Rocket,
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Building2,
  UserCheck,
  Globe,
  Zap
} from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{count}</span>;
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay?: number;
}) => (
  <div 
    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const StatCard = ({ number, label, suffix = "", delay = 0 }: {
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}) => (
  <div 
    className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-3xl font-bold text-white mb-2">
      <AnimatedCounter end={number} />
      {suffix}
    </div>
    <div className="text-blue-100">{label}</div>
  </div>
);

const TestimonialCard = ({ quote, author, role, delay = 0 }: {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}) => (
  <div 
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
        <span className="text-white font-semibold">{author[0]}</span>
      </div>
      <div>
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  </div>
);

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Grapreneur</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-600 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#join" className="text-gray-600 hover:text-blue-600 transition-colors">Join</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6" itemProp="headline">
                Empowering the Next Generation of Entrepreneurs
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto" itemProp="description">
                Join Grapreneur – A Student Startup Support Ecosystem by Grapinz
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">For Students</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">For Startup Founders</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">For Supporters</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Users className="w-5 h-5" />
                  <span>Join as Student</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-blue-200">
                  <UserCheck className="w-5 h-5" />
                  <span>Join as Mentor</span>
                </button>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Heart className="w-5 h-5" />
                  <span>Support Us</span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white" itemScope itemType="https://schema.org/AboutPage">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" itemProp="name">About Grapreneur</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
                Grapreneur (Entrepreneur Development & Support Program) is an initiative by Grapinz Technology & Institution 
                to develop entrepreneurial skills among students through structured mentorship, hands-on projects, and a growth-focused ecosystem.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-600 mb-6">
                  To bridge the gap between education and practical startup experience for young innovators.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Rocket className="w-6 h-6 text-blue-600 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower students and startups through innovation, mentorship, and real-world learning.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight" delay={400}>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Program Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard number={18} label="Active Colleges" suffix="+" />
                  <StatCard number={320} label="Student Members" suffix="+" delay={200} />
                  <StatCard number={24} label="Startup Projects" delay={400} />
                  <StatCard number={40} label="Mentors & Experts" suffix="+" delay={600} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section id="programs" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" itemProp="name">Program Features</h2>
              <p className="text-xl text-gray-600" itemProp="description">Comprehensive support for aspiring entrepreneurs</p>
            </div>
          </AnimatedSection>
          
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Lightbulb}
              title="Mindset Development"
              description="Build entrepreneurial thinking with focused workshops and interactive sessions."
              delay={0}
            />
            <FeatureCard
              icon={Rocket}
              title="Startup Incubation"
              description="From idea to launch with expert support and structured guidance."
              delay={200}
            />
            <FeatureCard
              icon={Users}
              title="Mentorship Access"
              description="Learn from founders, CEOs, and industry professionals."
              delay={400}
            />
            <FeatureCard
              icon={BookOpen}
              title="Live Projects"
              description="Work on real-world business models and gain practical experience."
              delay={600}
            />
            <FeatureCard
              icon={Award}
              title="Certification"
              description="Recognized proof of learning and participation in the program."
              delay={800}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Growth Tracking"
              description="Monitor your progress and celebrate milestones along the way."
              delay={1000}
            />
          </StaggeredGrid>
        </div>
      </section>

      {/* For Colleges */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">For Colleges</h2>
              <p className="text-xl text-gray-600 mb-8">
                Want to bring Grapreneur to your campus? Contact us to launch a Grapreneur Club in your college 
                and empower your students to lead startups from the front.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto">
                <Building2 className="w-5 h-5" />
                <span>Start a Club in Your College</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Startup Founders */}
      <section id="join" className="py-16 px-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-4">Startup Founders: Join the Movement</h2>
            <p className="text-2xl mb-8 opacity-90">Be the Inspiration You Once Needed</p>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg mb-8">Are you a startup founder? Join Grapreneur to:</p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Share your journey with aspiring student entrepreneurs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Offer mentorship or project-based guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Collaborate with our incubation and events</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Co-host innovation challenges in colleges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Discover and hire passionate student talent</span>
                </div>
              </div>
            </div>
            
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto">
              <UserCheck className="w-5 h-5" />
              <span>Join as Founder-Mentor</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest Opportunities */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Opportunities</h2>
              <p className="text-xl text-gray-600">Don't miss these exciting events and programs</p>
            </div>
          </AnimatedSection>
          
          <StaggeredGrid className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <Calendar className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hackathon</h3>
              <p className="mb-4">"Startup in 24 Hours" Challenge</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Register Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
              <BookOpen className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Workshop</h3>
              <p className="mb-4">MVP Building Bootcamp (July 28)</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
                Register Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <Award className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Demo Day</h3>
              <p className="mb-4">College Startup Pitch Event – August 2025</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Register Now
              </button>
            </div>
          </StaggeredGrid>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Hear from our community members</p>
            </div>
          </AnimatedSection>
          
          <StaggeredGrid className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="I started a freelance agency with Grapreneur support during college."
              author="Kavya"
              role="B.Com, Trichy"
              delay={0}
            />
            <TestimonialCard
              quote="I got my startup featured in 3 colleges and hired interns."
              author="Nitin"
              role="Startup Founder, Bangalore"
              delay={200}
            />
          </StaggeredGrid>
          
          <AnimatedSection delay={600}>
            <div className="text-center mt-8">
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 mx-auto">
                <span>Read Full Stories</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <Mail className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Inspired</h2>
              <p className="text-lg text-gray-600 mb-8">
                Hear from real founders and changemakers. Get startup tips, student wins, and event alerts.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white" itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" itemProp="name">Contact & Connect</h2>
              <p className="text-xl opacity-90">Get in touch with our team</p>
            </div>
          </AnimatedSection>
          
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" itemScope itemType="https://schema.org/ContactPoint">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="opacity-90" itemProp="telephone">+91 8270661266</p>
            </div>
            
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90" itemProp="email">institution@grapinz.com</p>
            </div>
            
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="opacity-90">www.grapinz.com</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">UPI ID</h3>
              <p className="opacity-90">grapinz@upi</p>
            </div>
          </StaggeredGrid>
          
          <AnimatedSection delay={800}>
            <div className="flex justify-center space-x-6 mt-12">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Grapreneur</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of entrepreneurs through education, mentorship, and real-world experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Grapreneur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join as Student</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join as Founder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Mentor</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Start a Club</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Startup Incubation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorship Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events & Workshops</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Support Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Sponsor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Grapreneur by Grapinz Technology & Institution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;