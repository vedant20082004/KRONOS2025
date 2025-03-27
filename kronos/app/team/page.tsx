"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Define types for team members
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
  achievements?: string[];
};

type Department = {
  name: string;
  coordinator: TeamMember;
  coCoordinators: TeamMember[];
};

export default function TeamPage() {
  // Sample data - replace with actual team data
  const dsw: TeamMember = {
    name: "Manoj Mishra",
    role: "Faculty Incharge",
    image: "/WhatsApp Image 2025-03-27 at 3.23.14 PM.jpeg",
    bio: "With a passion for fostering innovation and empowering students, Manoj Mishra has been an integral part of Kronos Tech Fest as the Faculty Coordinator. With years of experience in academic leadership and student engagement, he has played a key role in shaping this event into one of the most anticipated tech festivals of the year.",
    email: "dsw@itmgoi.in",
    achievements: [
      "Spearheaded partnerships with leading tech organizations and sponsors.",

      "Facilitated workshops and mentorship programs to enhance student learning.",

      "Played a crucial role in securing funding and logistical support for the event.",

      "Guided student committees in organizing a seamless and impactful tech fest.",
    ],
  };
  const adsw: TeamMember = {
    name: "Nitin Dixit",
    role: "Faculty Incharge",
    image: "/WhatsApp Image 2025-03-07 at 19.39.53_61d1cf60.jpg",
    bio: "A visionary leader and dedicated mentor, Nitin Dixit serves as the Assistant Dean of Student Welfare (ADSW) for Kronos Tech Fest 2025. With a strong background in student engagement, academic administration, and event management, he has been instrumental in fostering a culture of innovation and collaboration among students.",
    email: "dsw@itmgoi.in",
    achievements: [
      "Successfully led initiatives to enhance student participation and outreach.",
      "Strengthened industry collaborations, bringing esteemed experts to the fest.",
      "Provided crucial guidance to student-led organizing committees.",
      "Advocated for student-driven innovation and entrepreneurial initiatives.",
    ],
  };
  const president: TeamMember = {
    name: "Utkarsh Mishra",
    role: "President",
    image: "/president.jpg",
    bio: "As the President of Kronos Tech Fest 2025, Utkarsh Mishra stands at the forefront of innovation, leadership, and student-driven excellence. A final-year student with a deep passion for technology and event management, he has played a pivotal role in transforming Kronos into one of the most dynamic and impactful tech festivals.",
    email: "kronos@itmgoi.in",
    achievements: [
      "Spearheaded the planning and execution of the largest edition of Kronos Tech Fest.",

      "Strengthened industry and academic collaborations, bringing renowned speakers and mentors.",

      "Led a team of organizers, ensuring seamless event coordination and participation.",

      "Introduced new technical challenges, hackathons, and startup initiatives to enhance engagement.",
    ],
  };

  const secretary: TeamMember = {
    name: "Chetan Bhargav",
    role: "Secretary",
    image: "/secretary.jpg",
    bio: "As the Secretary of Kronos Tech Fest 2025, Chetan Bhargav plays a crucial role in ensuring the seamless execution of one of the most prestigious tech festivals. A final-year student with exceptional organizational skills and a passion for technology, he has been instrumental in coordinating various aspects of the fest, from event planning to team management.",
    email: "kronos@itmgoi.in",
    achievements: [
      "Led the coordination of multiple events, ensuring flawless execution.",

      "Strengthened communication channels between organizing committees and stakeholders.",

      "Managed event schedules, logistics, and resource allocation efficiently.",

      "Played a key role in expanding student participation and engagement.",
    ],
  };

  const departments: Department[] = [
    {
      name: "Tech",
      coordinator: {
        name: "Aryaman Bhatnagar",
        role: "Coordinator",
        image: `/tech.jpg`,
      },
      coCoordinators: [
        {
          name: "Ronak Verma",
          role: "Co-coordinator",
          image: `/tech-ronak.jpg`,
        },
        {
          name: "Vedant Pisal",
          role: "Co-coordinator",
          image: `tech-vedant.jpg`,
        },
      ],
    },
    {
      name: "Non-Tech",
      coordinator: {
        name: "Vishnu Kushwah",
        role: "Coordinator",
        image: `/non-tech.jpg`,
      },
      coCoordinators: [
        {
          name: "Ashhad rehman khan",
          role: "Co-coordinator",
          image: `nontech-ashad.jpg`,
        },
        {
          name: "Milan Sharma",
          role: "Co-coordinator",
          image: `WhatsApp Image 2025-03-27 at 1.52.37 PM.jpeg`,
        },
      ],
    },
    {
      name: "HR",
      coordinator: {
        name: "Surbhi Tiwari",
        role: "Coordinator",
        image: `/hr.jpg`,
      },
      coCoordinators: [
        {
          name: "Adarsh Dixit",
          role: "Co-coordinator ",
          image: `/IMG-20241103-WA0010 - Adarsh Dixit.jpg`,
        },
        {
          name: "Sneha Saraswat",
          role: "Co-coordinator  ",
          image: `/hr-sneha.jpg`,
        },
      ],
    },
    {
      name: "PR/Media",
      coordinator: {
        name: "Vaishnavi Bhadauria",
        role: "oordinator ",
        image: `/pr & media.jpg`,
      },
      coCoordinators: [
        {
          name: "Mohit Prajapati",
          role: "Co-coordinator ",
          image: `/pr-mohit.jpg`,
        },
        {
          name: "Prabhat Verma",
          role: "Co-coordinator ",
          image: `/pr-prabhat.jpg`,
        },
      ],
    },
    {
      name: "Logistics",
      coordinator: {
        name: "Harsh Singh Sengar",
        role: "Coordinator ",
        image: `/logistics.png`,
      },
      coCoordinators: [
        {
          name: "Deepanshu Tripathi",
          role: "Co-coordinator ",
          image: `/deepanshu - logistics.jpg`,
        },
        {
          name: "Jatin Sharma",
          role: "Co-coordinator ",
          image: `/logistics- jatin.jpg`,
        },
      ],
    },
    {
      name: "Design/Creative",
      coordinator: {
        name: "Sanidhya Tiwari",
        role: "Coordinator ",
        image: `Design.jpg`,
      },
      coCoordinators: [
        {
          name: "Sarthak Yadav",
          role: "Co-coordinator ",
          image: `/design-sarthak.png`,
        },
        {
          name: "Utkarsh Srivastava",
          role: "Co-coordinator ",
          image: `/design-utksrsh.jpg`,
        },
      ],
    },
    {
      name: "Finance",
      coordinator: {
        name: "Manav Sahu",
        role: "Coordinator",
        image: `/IMG_8532 - Manav Sahu.jpeg`,
      },
      coCoordinators: [
        {
          name: "Radhika Agarwal",
          role: "Co-coordinator ",
          image: `/Snapchat-986183843 - Radhika Agarwal.jpg`,
        },
        {
          name: "Pulak Jain",
          role: "Co-coordinator ",
          image: `/WhatsApp Image 2025-03-27 at 2.14.34 PM.jpEg`,
        },
      ],
    },
    {
      name: "Promotion",
      coordinator: {
        name: "Krishna Sikarwar",
        role: "Coordinator",
        image: `/promotion.jpeg`,
      },
      coCoordinators: [
        {
          name: "Sadaf Ali",
          role: "Co-coordinator ",
          image: `/promotion-sadaf.jpg`,
        },
        {
          name: "Kavya Soni",
          role: "Co-coordinator ",
          image: `/promotion-kavy.jpeg`,
        },
      ],
    },
    {
      name: "Sponsorship",
      coordinator: {
        name: "Shivangi Dixit",
        role: "Coordinator ",
        image: `/sponsorsdhip.jpg`,
      },
      coCoordinators: [
        {
          name: "Krishna Sahu",
          role: "Co-coordinator ",
          image: `/IMG_20250306_224553 - Krishna Sahu.jpg`,
        },
        {
          name: "Adil Khan",
          role: "Co-coordinator",
          image: `/sponsorship-adil.jpg`,
        },
      ],
    },
    {
      name: "Discipline",
      coordinator: {
        name: "Harsh Pratap Singh Chauhan",
        role: "Coordinator",
        image: `/discipline.jpg`,
      },
      coCoordinators: [
        {
          name: "Rohit Gupta",
          role: "Co-coordinator",
          image: `WhatsApp Image 2025-03-27 at 4.09.50 PM.jpeg`,
        },
        {
          name: "Naman Mishra",
          role: "Co-coordinator",
          image: `WhatsApp Image 2025-03-27 at 4.09.51 PM.jpeg`,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen relative overflow-hidden">
        {/* Star background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Navigation */}

        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12 flex flex-col justify-center items-center">
            <div className="inline-block rounded-full px-4 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 mb-4 border border-purple-800/50">
              TECH FEST 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                KRONOS
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ">
                TEAM
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-justify">
              Meet the brilliant minds behind Kronos Tech Revolution. Our team
              of innovators, visionaries, and tech enthusiasts are working
              tirelessly to bring you the most anticipated tech festival of the
              year.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            <Card className="w-full bg-black/40 backdrop-blur-md border border-purple-800/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] group overflow-hidden">
              <CardHeader className="text-center border-b border-purple-900/30">
                <CardTitle className="text-purple-400 group-hover:text-pink-400 transition-colors uppercase tracking-wider">
                  Faculty Coordinator (DSW)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors shrink-0 relative">
                    <div className=""></div>
                    <Image
                      src={dsw.image || "/placeholder.svg"}
                      alt={dsw.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {dsw.name}
                    </h3>
                    <p className="text-gray-400 mb-3">{dsw.bio}</p>
                    <p className="text-purple-300 mb-2">
                      <span className="font-semibold">Contact: </span>
                      {dsw.email}
                    </p>
                    <div className="mt-3">
                      <h4 className="text-pink-400 font-medium mb-2 uppercase tracking-wider text-sm">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm">
                        {dsw.achievements?.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full bg-black/40 backdrop-blur-md border border-purple-800/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] group overflow-hidden">
              <CardHeader className="text-center border-b border-purple-900/30">
                <CardTitle className="text-purple-400 group-hover:text-pink-400 transition-colors uppercase tracking-wider">
                  Faculty Coordinator (ADSW)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors shrink-0 relative">
                    <div className=""></div>
                    <Image
                      src={adsw.image || "/placeholder.svg"}
                      alt={adsw.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {adsw.name}
                    </h3>
                    <p className="text-gray-400 mb-3">{adsw.bio}</p>
                    <p className="text-purple-300 mb-2">
                      <span className="font-semibold">Contact: </span>
                      {adsw.email}
                    </p>
                    <div className="mt-3">
                      <h4 className="text-pink-400 font-medium mb-2 uppercase tracking-wider text-sm">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm">
                        {adsw.achievements?.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* President Card */}
            <Card className="w-full bg-black/40 backdrop-blur-md border border-purple-800/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] group overflow-hidden">
              <CardHeader className="text-center border-b border-purple-900/30">
                <CardTitle className="text-purple-400 group-hover:text-pink-400 transition-colors uppercase tracking-wider">
                  President
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors shrink-0 relative">
                    <div className=""></div>
                    <Image
                      src={president.image || "/placeholder.svg"}
                      alt={president.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {president.name}
                    </h3>
                    <p className="text-gray-400 mb-3">{president.bio}</p>
                    <p className="text-purple-300 mb-2">
                      <span className="font-semibold">Contact: </span>
                      {president.email}
                    </p>
                    <div className="mt-3">
                      <h4 className="text-pink-400 font-medium mb-2 uppercase tracking-wider text-sm">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm">
                        {president.achievements?.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secretary Card */}
            <Card className="w-full bg-black/40 backdrop-blur-md border border-purple-800/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] group overflow-hidden">
              <CardHeader className="text-center border-b border-purple-900/30">
                <CardTitle className="text-purple-400 group-hover:text-pink-400 transition-colors uppercase tracking-wider">
                  Secretary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors shrink-0 relative">
                    <div className=""></div>
                    <Image
                      src={secretary.image || "/placeholder.svg"}
                      alt={secretary.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {secretary.name}
                    </h3>
                    <p className="text-gray-400 mb-3">{secretary.bio}</p>
                    <p className="text-purple-300 mb-2">
                      <span className="font-semibold">Contact: </span>
                      {secretary.email}
                    </p>
                    <div className="mt-3">
                      <h4 className="text-pink-400 font-medium mb-2 uppercase tracking-wider text-sm">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm">
                        {secretary.achievements?.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((department, index) => (
                <Card
                  key={index}
                  className="w-full bg-black/40 backdrop-blur-md border border-purple-800/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] group overflow-hidden"
                >
                  <CardHeader className="text-center border-b border-purple-900/30">
                    <CardTitle className="text-purple-400 group-hover:text-pink-400 transition-colors uppercase tracking-wider text-sm">
                      {department.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6">
                      {/* Coordinator */}
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors relative">
                          <div className=""></div>
                          <Image
                            src={
                              department.coordinator.image || "/placeholder.svg"
                            }
                            alt={department.coordinator.name}
                            width={112}
                            height={112}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {department.coordinator.name}
                        </h3>
                        <p className="text-purple-300 text-sm">
                          {department.coordinator.role}
                        </p>
                      </div>

                      {/* Co-coordinators */}
                      <div className="grid grid-cols-2 gap-4">
                        {department.coCoordinators.map(
                          (coCoordinator, coIndex) => (
                            <div
                              key={coIndex}
                              className="flex flex-col items-center"
                            >
                              <div className="w-28 h-28 rounded-full overflow-hidden mb-2 border-2 border-purple-500/50 group-hover:border-pink-500/50 transition-colors relative">
                                <div className=""></div>
                                <Image
                                  src={
                                    coCoordinator.image || "/placeholder.svg"
                                  }
                                  alt={coCoordinator.name}
                                  width={112}
                                  height={112}
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="text-base font-semibold text-center text-white">
                                {coCoordinator.name}
                              </h3>
                              <p className="text-xs text-purple-300 text-center">
                                {coCoordinator.role}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-purple-900/30 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 KRONOS TECH REVOLUTION. All rights reserved.
            </p>
          </div>
        </footer>

        {/* CSS for star animation */}
        <style jsx global>{`
          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.3;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
}
