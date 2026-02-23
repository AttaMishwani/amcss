import classroomLearning from '../assets/illustrations/classroom-learning.svg'
import sportsDay from '../assets/illustrations/sports-day.svg'
import artsCreativity from '../assets/illustrations/arts-creativity.svg'
import libraryReading from '../assets/illustrations/library-reading.svg'
import campusVisit from '../assets/illustrations/campus-visit.svg'

const photos = {
  classroomLearning: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600',
  sportsDay: 'https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=1600',
  artsCreativity: 'https://images.pexels.com/photos/8471986/pexels-photo-8471986.jpeg?auto=compress&cs=tinysrgb&w=1600',
  libraryReading: 'https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=1600',
  campusVisit: 'https://images.pexels.com/photos/8422206/pexels-photo-8422206.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

export const mockEvents = [
  {
    id: 'science-showcase-2026',
    title: 'Annual Science Showcase',
    date: '2026-03-14',
    time: '09:00 AM - 01:00 PM',
    location: 'Main Auditorium, Al Mansoor School',
    excerpt: 'Students present practical science projects focused on sustainability and robotics.',
    description:
      'Families are invited to explore student-led science innovations across junior and senior sections. Teachers and external reviewers will evaluate project design, teamwork, and presentation quality. The showcase reflects our commitment to inquiry-based learning and real-world problem-solving.',
    image: photos.classroomLearning,
    fallbackImage: classroomLearning,
    category: 'Academics',
  },
  {
    id: 'spring-sports-festival',
    title: 'Spring Sports Festival',
    date: '2026-03-22',
    time: '08:30 AM - 03:30 PM',
    location: 'School Sports Ground',
    excerpt: 'Track, football, and team challenges designed to build discipline and sportsmanship.',
    description:
      'The Spring Sports Festival brings together students, parents, and staff for a full day of healthy competition. Events include sprint races, relays, football fixtures, and house-based team games. Special recognition will be awarded for fair play and leadership on the field.',
    image: photos.sportsDay,
    fallbackImage: sportsDay,
    category: 'Sports',
  },
  {
    id: 'reading-week-launch',
    title: 'Reading Week Launch',
    date: '2026-04-02',
    time: '10:00 AM - 12:00 PM',
    location: 'School Library Hall',
    excerpt: 'A week-long literacy drive with reading circles and storytelling sessions.',
    description:
      'Our Reading Week begins with guided sessions that encourage vocabulary growth, comprehension, and confidence in public speaking. Parents can participate in selected storytelling slots and support students as reading partners throughout the week.',
    image: photos.libraryReading,
    fallbackImage: libraryReading,
    category: 'Academics',
  },
  {
    id: 'culture-day-heritage',
    title: 'Culture Day: Heritage of Pakistan',
    date: '2026-04-16',
    time: '11:00 AM - 02:00 PM',
    location: 'Multipurpose Hall',
    excerpt: 'Traditional performances, student exhibits, and language-based presentations.',
    description:
      'Culture Day celebrates Pakistan regional heritage through student performances, exhibition booths, and spoken-word segments. The event helps students build identity, confidence, and respect for diversity while strengthening family-school partnership.',
    image: photos.artsCreativity,
    fallbackImage: artsCreativity,
    category: 'Culture',
  },
  {
    id: 'math-olympiad-round',
    title: 'Inter-School Math Olympiad Round',
    date: '2026-05-05',
    time: '09:30 AM - 12:30 PM',
    location: 'Senior Wing, Exam Hall',
    excerpt: 'Competitive math challenge with analytical and logical reasoning problems.',
    description:
      'Selected students will represent Al Mansoor School in a regional math contest. Preparation workshops and mock rounds are planned in advance to support problem-solving skills, accuracy under time pressure, and collaborative learning.',
    image: photos.classroomLearning,
    fallbackImage: classroomLearning,
    category: 'Academics',
  },
  {
    id: 'family-community-day',
    title: 'Family & Community Day',
    date: '2026-05-24',
    time: '10:00 AM - 04:00 PM',
    location: 'Main Campus Courtyard',
    excerpt: 'Parent workshops, student showcases, and community service stalls.',
    description:
      'This event strengthens trust between families and the school through open dialogue sessions, student demonstrations, and service-oriented activities. Parents can interact directly with faculty and leadership to discuss academic pathways and student wellbeing.',
    image: photos.campusVisit,
    fallbackImage: campusVisit,
    category: 'Culture',
  },
  {
    id: 'summer-football-camp',
    title: 'Summer Football Skill Camp',
    date: '2026-06-10',
    time: '07:30 AM - 10:30 AM',
    location: 'Sports Complex Field',
    excerpt: 'Structured coaching sessions for stamina, passing, and tactical awareness.',
    description:
      'Our sports department runs this camp for middle and senior students to improve technique and fitness before the inter-school season. Sessions include drills, teamwork exercises, and coaching feedback tailored to each group.',
    image: photos.sportsDay,
    fallbackImage: sportsDay,
    category: 'Sports',
  },
  {
    id: 'leadership-workshop',
    title: 'Student Leadership Workshop',
    date: '2026-07-08',
    time: '10:00 AM - 01:00 PM',
    location: 'Conference Studio',
    excerpt: 'Communication, ethics, and decision-making workshop for prefect candidates.',
    description:
      'The workshop prepares student leaders for responsibility and service. Sessions focus on respectful communication, conflict resolution, and ethical decision-making, helping students become role models within the school community.',
    image: photos.classroomLearning,
    fallbackImage: classroomLearning,
    category: 'Academics',
  },
  {
    id: 'art-expression-exhibition',
    title: 'Art & Expression Exhibition',
    date: '2026-08-02',
    time: '11:00 AM - 03:00 PM',
    location: 'Creative Arts Gallery',
    excerpt: 'Fine arts, calligraphy, and design projects curated by students.',
    description:
      'Students showcase visual arts developed across the academic year, including sketching, painting, and mixed media work. Faculty mentors will guide families through the exhibition, explaining artistic growth and portfolio development.',
    image: photos.artsCreativity,
    fallbackImage: artsCreativity,
    category: 'Culture',
  },
]
