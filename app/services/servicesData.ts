import { StaticImageData } from "next/image";
import carServiceImg from "@/assets/general_car_service.webp";
import engineRepairImg from "@/assets/engine_repair.webp";
import dentPaintImg from "@/assets/dent_paint.webp";
import acServiceImg from "@/assets/ac_service.webp";
import wheelAlignmentImg from "@/assets/wheel_alignment.webp";
import wheelBalancingImg from "@/assets/wheel_balancing.webp";
import batteryReplacementImg from "@/assets/battery_replacement.jpg";
import insuranceClaimImg from "@/assets/insurance_claim_assistance.webp";
import carWashingImg from "@/assets/car_washing.webp";
import carDetailingImg from "@/assets/car_detailing.webp";
import ceramicCoatingImg from "@/assets/ceramic_coating.webp";
import ppfImg from "@/assets/ppf.webp";
import interiorCleaningImg from "@/assets/interior_cleaning.webp";
import exteriorDetailingImg from "@/assets/exterior_detailing.webp";
import computerDiagnosticsImg from "@/assets/computer_diagnostics.webp";
import workshop3 from "@/assets/workshop_3.webp";
import mechanicImg from "@/assets/mechanic.webp";
import workshop2 from "@/assets/workshop_2.webp";
import mechanicWorkImg from "@/assets/mechanic_work.webp";
import cngWorkImg from "@/assets/cng_work.webp";

export interface ServiceDetail {
  overview: string;
  features: string[];
  benefits: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export interface Service {
  slug: string;
  title: string;
  category: "Maintenance" | "Repairs" | "Cosmetics";
  iconName: string;
  image: StaticImageData;
  description: string;
  inDepthDetails: ServiceDetail;
}

export const servicesData: Service[] = [
  {
    slug: "diagnostic-tools-work",
    title: "Diagnostic Tools Work",
    category: "Repairs",
    iconName: "Gauge",
    image: computerDiagnosticsImg,
    description: "Advanced OBD-II scanner diagnostics to read engine fault codes, inspect live sensor data, and scan electronic control modules.",
    inDepthDetails: {
      overview: "Modern passenger vehicles are equipped with dozens of onboard computers and electronic control modules. Our Diagnostic Tools Work utilizes advanced OEM-approved OBD-II scanner consoles to read fault codes, capture live sensor readings, analyze ECU performance, and pinpoint electronic issues before executing repairs.",
      features: [
        "Full system electronic module health scan (ECU, ABS, Airbag, BCM)",
        "Live sensor data reading and waveform signal analysis",
        "Clearing Diagnostic Trouble Codes (DTCs) and dashboard check lights",
        "Fuel trim, oxygen sensor, and catalytic converter performance check",
        "Calibration of steering angle sensors and throttle body adaptations"
      ],
      benefits: [
        "Accurately diagnose issues without trial-and-error replacements",
        "Prevent major breakdowns by identifying hidden fault codes early",
        "Restore manufacturer-specified ECU calibration and engine performance",
        "Ensure full functionality of safety modules like ABS and Airbags"
      ],
      process: [
        "Connect our high-end diagnostic scanner console to your car's OBD-II port.",
        "Perform a full-system health scan across all electronic control units.",
        "Generate a diagnostic report showing active, history, and pending trouble codes.",
        "Cross-reference sensor readouts with factory-recommended specifications.",
        "Present the report to the owner and formulate a targeted repair plan."
      ],
      faqs: [
        {
          q: "What does the check engine light mean?",
          a: "The check engine light indicates that your vehicle's onboard computer (ECU) has detected a malfunction in the engine management, emissions control, or transmission system. A diagnostic scan is required to retrieve the specific trouble code."
        },
        {
          q: "Can you scan luxury cars from European brands?",
          a: "Yes, our diagnostic scanners support multi-brand software packages including advanced OEM database calibrations for Mercedes-Benz, BMW, Audi, Volkswagen, Skoda, Toyota, Hyundai, and more."
        }
      ]
    }
  },
  {
    slug: "caroliner-machine-work",
    title: "Caroliner Machine Work",
    category: "Repairs",
    iconName: "ShieldCheck",
    image: workshop3,
    description: "Chassis and frame straightening using advanced Caroliner collision repair machines to restore vehicle structure to exact factory specifications.",
    inDepthDetails: {
      overview: "Structural alignment is critical to car safety and handling after a major collision. Our Caroliner Machine Work utilizes the world-renowned Caroliner chassis alignment bench and computerized measuring systems. This technology enables us to measure, pull, and align damaged car frames and unibody structures back to the exact millimeter specifications set by the vehicle manufacturer.",
      features: [
        "Computerized chassis mapping and laser-guided structural measurements",
        "Hydraulic multi-point structural pulling and frame straightening",
        "Real-time monitoring of pulling forces to prevent structural metal fatigue",
        "Precise alignment of front engine cradles, aprons, pillars, and rear clips",
        "Verification report demonstrating alignment matches OEM CAD specs"
      ],
      benefits: [
        "Restores pre-accident crash-safety ratings and structural integrity",
        "Prevents uneven tire wear, suspension binding, and drift issues",
        "Accurate to the millimeter, ensuring doors and hoods fit perfectly",
        "Avoids structural weakness by applying controlled, progressive hydraulic force"
      ],
      process: [
        "Mount the vehicle securely on the Caroliner heavy-duty chassis bench.",
        "Use computerized measuring sensors to map the chassis reference points.",
        "Compare the measured dimensions with the official factory CAD blueprint database.",
        "Set up vector pulling clamps and apply hydraulic pulling forces to reverse the damage.",
        "Re-measure continuously during the pulling process to verify precise alignment."
      ],
      faqs: [
        {
          q: "Is it safe to drive a car after major chassis damage?",
          a: "Only if the chassis has been structurally corrected and aligned to factory specifications. A misaligned frame affects the crumple zones and suspension geometry, making the car unsafe. Our Caroliner bench ensures your car is safe to drive again."
        },
        {
          q: "How do you verify the frame is completely straight?",
          a: "We provide a printed measurement report from the Caroliner computer system showing pre-repair deviations and post-repair corrections, validating that the chassis is aligned to OEM specifications."
        }
      ]
    }
  },
  {
    slug: "denting-machine-work",
    title: "Denting Machine Work",
    category: "Repairs",
    iconName: "Wrench",
    image: dentPaintImg,
    description: "Advanced dent puller machines, stud welding, and panel beating systems to remove car body dents without disturbing the inner structure.",
    inDepthDetails: {
      overview: "Traditional denting often involves dismantling interior door cards, running boards, and panels. Our Denting Machine Work utilizes advanced digital dent pulling stations, stud welders, and slide hammers. By welding temporary copper rivets to the outer face of the dent, we can pull the sheet metal outward from the exterior, preserving your car's interior trim and factory sound dampening.",
      features: [
        "Digital micro-processor controlled dent puller machine tuning",
        "Precision spot-welding of slide keys on steel and aluminum panels",
        "Pneumatic slide hammer pulls for large, deep panel deformations",
        "Shrinking of stretched sheet metal using carbon electrode heating",
        "Detailed contour shaping to match the car's original body lines"
      ],
      benefits: [
        "No need to dismantle interior door panels, airbags, or electronics",
        "Preserves original factory inner seam sealants and anti-rust coatings",
        "Minimizes the amount of body filler (putty) required before painting",
        "Applicable to complex double-sheet panels and pillars where access is blocked"
      ],
      process: [
        "Clean the dented area and strip the paint to bare metal at contact points.",
        "Configure the digital dent puller's voltage based on panel thickness.",
        "Weld pulling keys or studs to the center of the dented zone.",
        "Apply calculated pulling force using a manual or pneumatic slide hammer.",
        "Trim the studs, grind the area smooth, and prepare the panel for prime coating."
      ],
      faqs: [
        {
          q: "Can you fix dents on aluminum panels?",
          a: "Yes, we have specialized dent pulling systems designed specifically for aluminum sheet metal, which requires controlled heat cycles to prevent cracking."
        },
        {
          q: "Will my factory paint be damaged during dent pulling?",
          a: "Yes, because the dent puller must weld studs directly to bare metal. The repaired area will require primer coating and professional painting afterward."
        }
      ]
    }
  },
  {
    slug: "paint-booth-work",
    title: "Paint Booth Work",
    category: "Cosmetics",
    iconName: "Paintbrush",
    image: workshop2,
    description: "Dust-free paint booth services with precision color matching, high-solid clear coats, and baked oven finishes for a factory shine.",
    inDepthDetails: {
      overview: "Achieving a factory-finish paint job requires a controlled, sterile environment. Our Paint Booth Work is performed inside a pressurized, dust-free down-draft paint booth. Equipped with multi-stage air filtration and automated diesel-fired baking ovens, our booth eliminates paint contamination while baking the paint layers to cure them into a hard, glossy, and durable finish.",
      features: [
        "Dust-free downdraft air filtration system (removes 99.9% of airborne particles)",
        "Computerized color mixing using premium PPG and DuPont paint systems",
        "Multi-layer paint application (primer, base coat, and high-solid clear coat)",
        "Oven baking cycle at 60-70°C for rapid, uniform paint curing",
        "Paint thickness matching to blend seamlessly with surrounding panels"
      ],
      benefits: [
        "Guarantees a smooth finish free of dust specks, bubbles, or orange peel",
        "Baking increases durability and resistance to UV oxidation, scratches, and chemicals",
        "Seamless color matching so repainted panels are indistinguishable from factory paint",
        "Enables quick turnaround times due to the rapid, heated drying cycles"
      ],
      process: [
        "Mask all non-painted panels, glass, and trims using premium paper and tape.",
        "Wipe the prepared panels with anti-static degreasers to remove contaminants.",
        "Mix the exact paint formula calculated by our computerized matching software.",
        "Apply base color coats and high-gloss clear coats using professional spray guns.",
        "Initiate the oven heating cycle to bake and dry the paint layers for 45 minutes."
      ],
      faqs: [
        {
          q: "How long does a paint job take to dry in the booth?",
          a: "With our automated oven baking system, the paint cures and dries in just 45-60 minutes at 65°C, allowing us to deliver your car much faster than air-drying methods."
        },
        {
          q: "Do you offer a warranty on paint booth work?",
          a: "Yes, we provide up to a 2-year warranty against peeling, fading, or bubbling on all panels painted inside our professional booth."
        }
      ]
    }
  },
  {
    slug: "accessories-mechanic-work",
    title: "Accessories & Mechanic Work",
    category: "Maintenance",
    iconName: "Wrench",
    image: mechanicWorkImg,
    description: "Professional installation of premium car accessories alongside comprehensive mechanical, suspension, engine, and electrical repair services.",
    inDepthDetails: {
      overview: "Whether you need high-end accessories installed or critical mechanical repairs, our Accessories & Mechanic Work combines convenience with engineering expertise. Our team handles everything from car seat covers, Android touchscreens, and LED headlight upgrades to heavy mechanical tasks like suspension overhauls, steering repairs, brake overhauls, and clutch replacements.",
      features: [
        "Professional wiring and fitting of Android infotainment screens and audio upgrades",
        "Installation of premium seat covers, floor lamination, and interior accessories",
        "Complete suspension rebuild (shock absorbers, link rods, control arm bushings)",
        "Brake system overhaul, including brake disc machining and caliper servicing",
        "Clutch assembly replacement and manual/automatic gearbox overhaul"
      ],
      benefits: [
        "One-stop workshop for both mechanical maintenance and aesthetic upgrades",
        "Accessories are installed using coupler-to-coupler wiring to protect factory warranty",
        "Mechanic work uses authentic spares and proper torque settings for road safety",
        "Experienced auto technicians handle complex electronic accessories and mechanical setups"
      ],
      process: [
        "Conduct a detailed pre-work inspection of the mechanical system or accessory wiring.",
        "Perform mechanical repairs using specialized pulling, pressing, and torque tools.",
        "Install accessories cleanly without cutting factory harnesses or drilling structural metal.",
        "Execute a thorough electrical load test and mechanical diagnostic inspection.",
        "Conduct a road test to verify suspension stability, braking force, and gear changes."
      ],
      faqs: [
        {
          q: "Will installing a touchscreen accessory void my car's warranty?",
          a: "No, we use coupler-to-coupler connectors that plug directly into factory sockets without cutting or altering any original wires, protecting your warranty."
        },
        {
          q: "What brands of suspension parts do you use?",
          a: "We use original OEM brands like Monroe, Gabriel, TRW, or authentic manufacturer spares (Hyundai, Maruti, Toyota Genuine Parts) to ensure quality."
        }
      ]
    }
  },
  {
    slug: "cng-work",
    title: "CNG Work",
    category: "Maintenance",
    iconName: "RotateCw",
    image: cngWorkImg,
    description: "Certified CNG kit installation, sequential kit tuning, leakage checks, gas cylinder hydro-testing, and expert CNG engine maintenance.",
    inDepthDetails: {
      overview: "Driving an eco-friendly CNG vehicle requires specialized safety checks and fuel tuning. Our CNG Work covers certified sequential CNG kit installations, electronic tuning using gas-injection mapping software, high-pressure leak testing, replacement of low/high-pressure filters, and coordination for government-mandated cylinder hydro-testing.",
      features: [
        "Certified sequential CNG kit installation and RTO registration liaison",
        "Laptop-based dynamic CNG injector calibration and gas mapping tuning",
        "High-pressure leakage checks using electronic gas sniffer detectors",
        "Replacement of CNG pressure reducer diaphragms and filter cartridges",
        "Spark plug gap adjustments optimized for high CNG combustion temperatures"
      ],
      benefits: [
        "Restores smooth, stutter-free engine acceleration in gas mode",
        "Prevents dangerous gas leaks through regular high-pressure hose inspections",
        "Optimizes fuel economy, reducing running costs per kilometer",
        "Ensures complete legal compliance with RTO endorsement and hydro-test certificates"
      ],
      process: [
        "Inspect the engine compression and ignition health before installing or tuning CNG.",
        "Mount the CNG cylinder, high-pressure pipes, and regulator reducer safely.",
        "Connect gas mapping software to calibrate the sequential CNG computer (ECU).",
        "Perform leakage scans on all joints using electronic methane detectors.",
        "Conduct a dynamic road test with live fuel trimming checkups."
      ],
      faqs: [
        {
          q: "How often should I service my CNG car?",
          a: "We recommend checking for gas leaks every 10,000 kms, replacing the CNG filter cartridges every 20,000 kms, and adjusting spark plugs regularly for smooth combustion."
        },
        {
          q: "Is it necessary to hydro-test the CNG cylinder?",
          a: "Yes, as per government rules, every CNG car cylinder must undergo official hydrostatic pressure testing every 3 years to verify structural safety."
        }
      ]
    }
  },
  {
    slug: "general-car-service",
    title: "General Car Service",
    category: "Maintenance",
    iconName: "Wrench",
    image: carServiceImg,
    description: "Includes engine oil replacement, oil filter change, air filter cleaning, brake check, coolant top-up, and 40-point diagnostic check.",
    inDepthDetails: {
      overview: "Scheduled maintenance is the key to vehicle longevity and reliability. Our General Car Service is a comprehensive package designed to refresh your vehicle's engine fluids, clean air filters, inspect vital chassis components, and run full system diagnostics to verify your car's roadworthiness.",
      features: [
        "Engine oil replacement using premium synthetic or semi-synthetic oils",
        "Oil filter and air filter replacement or deep cleaning",
        "Brake pad inspection, cleaning, and caliper greasing",
        "All fluid top-ups (coolant, brake fluid, steering fluid, windshield fluid)",
        "Comprehensive 40-point visual and mechanical checklist inspection"
      ],
      benefits: [
        "Keeps the engine running smoothly and improves overall fuel economy",
        "Spots wear and tear in suspension, belts, and hoses before they fail",
        "Ensures vehicle safety through full brake and steering inspections",
        "Maintains a high resale value with a clean service history record"
      ],
      process: [
        "Place the car on a dual-post lift and perform an initial road test and scanner check.",
        "Drain the old engine oil, replace the oil filter, and install fresh oil.",
        "Inspect the spark plugs, air filter, and cabin filter, cleaning or replacing them.",
        "Remove all wheels to clean, inspect, and adjust brake pads and shoes.",
        "Top up vital fluids, check battery health, wash the vehicle, and stamp the service record."
      ],
      faqs: [
        {
          q: "How often should I service my car?",
          a: "We recommend a general service every 10,000 kms or 1 year, whichever comes first, to keep your engine in top condition."
        },
        {
          q: "What engine oil brands do you use?",
          a: "We use premium oil brands like Mobil1, Castrol, Shell, or Motul, matching the exact viscosity recommended by your car manufacturer."
        }
      ]
    }
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    category: "Repairs",
    iconName: "RotateCw",
    image: engineRepairImg,
    description: "Complete engine diagnostics, overhaul, valve adjustments, cylinder head repairs, head gasket replacement, and timing belt installations.",
    inDepthDetails: {
      overview: "From minor oil leaks to complete engine rebuilding, our Engine Repair service brings factory-level engineering to your vehicle. Our highly experienced mechanics perform cylinder head reconditioning, head gasket replacement, timing assembly updates, piston ring replacement, and full engine block overhauls.",
      features: [
        "Engine compression testing and cylinder leak-down diagnostics",
        "Cylinder head resurfacing, valve grinding, and seal replacement",
        "Engine block machining, boring, piston ring and bearing replacement",
        "Timing belt or timing chain kit installations with precise synchronization",
        "Tracing and resolving oil leaks, coolant mixing, and exhaust smoke issues"
      ],
      benefits: [
        "Restores original engine horsepower, compression, and fuel efficiency",
        "Eliminates rough idling, engine knocking, misfires, and overheating",
        "Extends the life of your vehicle without the cost of buying a new car",
        "Engine repairs are backed by a reliable workshop warranty on parts and labor"
      ],
      process: [
        "Execute dynamic diagnostics to evaluate compression and trace the root malfunction.",
        "Dismantle engine accessories and extract the engine block if an overhaul is needed.",
        "Send components for precision machining and clean all internal oil passages.",
        "Reassemble the engine using new gaskets, seals, pistons, and bearings to exact torque specs.",
        "Install the engine, refill fluids, and run controlled heat-cycle tests before road testing."
      ],
      faqs: [
        {
          q: "Why is my engine blowing white smoke?",
          a: "White smoke usually indicates that coolant is entering the combustion chambers, often caused by a blown head gasket, cracked cylinder head, or engine block damage."
        },
        {
          q: "Do you offer a warranty on engine overhauls?",
          a: "Yes, we offer a comprehensive 6-month or 10,000 km warranty on all engine overhauls and rebuilds performed in our workshop."
        }
      ]
    }
  },
  {
    slug: "car-ac-service",
    title: "Car AC Service",
    category: "Repairs",
    iconName: "Wind",
    image: acServiceImg,
    description: "AC gas top-up, leak testing, compressor repair, condenser cleaning, cabin filter replacement, and temperature diagnostics.",
    inDepthDetails: {
      overview: "A properly functioning air conditioning system is vital for comfort. Our Car AC Service offers complete cooling loop diagnostics, refrigerant R134a recovery and recharge, leak detection using pressurized nitrogen, compressor servicing, and cabin filter replacements.",
      features: [
        "Refrigerant recovery, vacuuming, and high-purity R134a gas recharging",
        "Pressure checking of low-pressure and high-pressure AC lines",
        "AC compressor pulley, clutch, coil, and control valve repair",
        "Condenser high-pressure washing and cooling fan testing",
        "Cabin AC filter replacement and evaporator coil cleaning"
      ],
      benefits: [
        "Restores freezing air temperatures inside the cabin quickly",
        "Clears unpleasant odors and bacteria by cleaning the evaporator coil",
        "Prevents compressor failure by replenishing lubricating compressor oil",
        "Improves fuel mileage by reducing drag from a struggling AC compressor"
      ],
      process: [
        "Measure cabin vent temperature and check AC high/low side pressures.",
        "Perform nitrogen pressure testing to locate any micro-leaks in hoses or coils.",
        "Replace damaged parts, evacuate the system to remove moisture, and refill compressor oil.",
        "Recharge the AC loop with the exact weight of R134a gas using an automated machine.",
        "Replace the cabin air filter and run sanitizer through the ventilation ducts."
      ],
      faqs: [
        {
          q: "Why is my car AC blowing hot air?",
          a: "This is usually caused by low refrigerant levels due to a leak, a malfunctioning compressor clutch, or a blocked condenser. We perform nitrogen pressure testing to pinpoint the cause."
        },
        {
          q: "How often should I clean the cabin AC filter?",
          a: "We recommend cleaning or blowing out the cabin filter every 5,000 kms and replacing it every 10,000-15,000 kms to ensure clean airflow."
        }
      ]
    }
  },
  {
    slug: "wheel-alignment",
    title: "Wheel Alignment",
    category: "Maintenance",
    iconName: "Compass",
    image: wheelAlignmentImg,
    description: "3D computerized wheel alignment to correct tire angle, prevent uneven tread wear, and ensure stable highway driving.",
    inDepthDetails: {
      overview: "Potholes and road bumps can throw your car's suspension angles out of spec, causing steering pull and rapid tire wear. Our Wheel Alignment service uses high-definition 3D camera sensors and computerized databases containing factory specs for every car make. We adjust your vehicle's camber, caster, and toe angles to ensure the car drives perfectly straight.",
      features: [
        "3D sensor camera calibration of all four wheels",
        "Measurement and correction of Camber, Caster, and Toe suspension angles",
        "Steering wheel center position calibration",
        "Detailed inspection of suspension bushings, ball joints, and tie rod ends",
        "Digital printout report showing pre-alignment and post-alignment specs"
      ],
      benefits: [
        "Eliminates vehicle pulling to the left or right, ensuring safer highway driving",
        "Prevents uneven tire wear, extending the lifespan of your tires",
        "Improves steering response and handling accuracy",
        "Reduces rolling resistance, boosting fuel economy"
      ],
      process: [
        "Mount the car on our alignment lift and clamp high-resolution 3D targets to the wheels.",
        "Roll the vehicle to measure initial toe, camber, and caster angles.",
        "Adjust tie rod ends and suspension bolts to match factory alignment specs.",
        "Calibrate the steering wheel angle sensor using our OBD diagnostic scanner.",
        "Print the alignment report and perform a road test to verify straight-line tracking."
      ],
      faqs: [
        {
          q: "What is the difference between alignment and balancing?",
          a: "Alignment corrects the angle of the tires relative to each other and the road to prevent pulling. Balancing distributes the weight around the wheel assembly to prevent highway speed vibrations."
        },
        {
          q: "How often should I align my wheels?",
          a: "We recommend wheel alignment and rotation every 5,000 to 10,000 kms, or immediately if you experience steering pull or hit a deep pothole."
        }
      ]
    }
  },
  {
    slug: "wheel-balancing",
    title: "Wheel Balancing",
    category: "Maintenance",
    iconName: "Disc",
    image: wheelBalancingImg,
    description: "Precision dynamic wheel balancing to eliminate highway speed steering vibration and extend tire suspension life.",
    inDepthDetails: {
      overview: "Minor weight imbalances in your tires can cause significant vibrations in the steering wheel and cabin at highway speeds (80-120 km/h). Our Wheel Balancing service uses precision dynamic balancing machinery. The machine spins each wheel to identify heavy spots, allowing us to attach counterweights to ensure the wheel spins smoothly at all speeds.",
      features: [
        "Dynamic high-speed wheel balancing on digital balancing machines",
        "Removal of old weights and cleaning of inner alloy wheel barrels",
        "Calculated attachment of clip-on or adhesive lead-free wheel weights",
        "Checking wheels and tires for lateral and radial runout (wobble)",
        "Inspection of tire tread depth and tire pressure adjustment"
      ],
      benefits: [
        "Eliminates annoying steering wheel vibrations, improving driving comfort",
        "Prevents premature wear of steering columns, wheel bearings, and suspension shocks",
        "Ensures consistent tire contact with the road for better traction",
        "Reduces dynamic stress on the tire tread, preventing localized flat spots"
      ],
      process: [
        "Dismount the wheels from the vehicle and clean the tires of any stones or dirt.",
        "Remove old balancing weights and mount the wheel onto the digital balancer.",
        "Input wheel parameters (width, diameter, offset) and spin the wheel.",
        "Apply the weight adjustments indicated by the balancer at the exact angles.",
        "Spin the wheel a second time to verify the balance is at zero, then re-mount to the car."
      ],
      faqs: [
        {
          q: "Why does my steering wheel vibrate at 80 km/h?",
          a: "This is a classic symptom of out-of-balance front wheels. Unbalanced rear wheels can also cause the seat or vehicle floor to vibrate."
        },
        {
          q: "Should I balance my tires during tire rotation?",
          a: "Yes, we recommend balancing all wheels during tire rotation every 10,000 kms to compensate for uneven tread wear."
        }
      ]
    }
  },
  {
    slug: "battery-replacement",
    title: "Battery Replacement",
    category: "Maintenance",
    iconName: "Zap",
    image: batteryReplacementImg,
    description: "Testing battery health, clean terminals, and installation of premium warranties batteries from Exide and Amaron.",
    inDepthDetails: {
      overview: "A dead battery can leave you stranded. Our Battery Replacement service offers quick diagnostic testing of your battery's cranking health and alternator charging voltage. If a replacement is needed, we stock and install fresh, original batteries from top brands like Exide and Amaron, complete with official warranty cards.",
      features: [
        "Digital battery health analysis (CCA - Cold Cranking Amps testing)",
        "Alternator charging voltage and starter motor load test",
        "Cleaning battery terminals and applying anti-corrosion grease",
        "Eco-friendly disposal and recycling of old batteries with credit discounts",
        "Installation of brand-new batteries with on-the-spot warranty validation"
      ],
      benefits: [
        "Guarantees reliable engine starts in cold weather and hot summers",
        "Prevents damage to sensitive vehicle electronics caused by voltage drops",
        "Includes a manufacturer warranty for peace of mind",
        "Ensures the alternator charging circuit is functioning correctly"
      ],
      process: [
        "Connect a digital tester to check battery voltage, internal resistance, and CCA.",
        "Test the alternator charging output under full electrical load (headlights, blower on).",
        "If weak, disconnect the terminals (keeping memory saver plugged in if needed).",
        "Clean the battery tray, install the new battery, and tighten terminals securely.",
        "Apply anti-corrosion petroleum jelly and verify the new charging system output."
      ],
      faqs: [
        {
          q: "How long does a car battery typically last?",
          a: "A car battery usually lasts between 3 to 5 years, depending on usage, climate, and the health of the alternator."
        },
        {
          q: "Can a bad alternator ruin a new battery?",
          a: "Yes. If the alternator overcharges (above 14.8V) or undercharges (below 13.5V), it will rapidly degrade or drain a new battery. We always test the alternator during replacement."
        }
      ]
    }
  },
  {
    slug: "insurance-claim-assistance",
    title: "Insurance Claim Assistance",
    category: "Repairs",
    iconName: "FileText",
    image: insuranceClaimImg,
    description: "Tie-ups with leading insurance companies for cashless accident repairs. Complete surveyor liaison and billing handling.",
    inDepthDetails: {
      overview: "Dealing with accident damage is stressful enough. Our Insurance Claim Assistance handles the entire process for you. We have cashless tie-ups with leading motor insurance companies. Our dedicated claims team coordinates with the surveyor, prepares detailed estimates, manages approval paperwork, and executes factory-standard repairs.",
      features: [
        "Cashless repair approval processing with major insurance providers",
        "Liaison with insurance surveyors for claim inspection and estimation",
        "Preparation of digital claim files including damage photos and estimates",
        "Filing of claims for plastic parts, fiber, glass, metal, and mechanical parts",
        "Hassle-free documentation and final delivery billing coordination"
      ],
      benefits: [
        "Saves time and stress by handling all calls, emails, and surveyor meetings",
        "Minimizes out-of-pocket expenses through cashless payment settlement",
        "Ensures correct repair approval and maximum parts replacement coverage",
        "Repairs are executed using genuine manufacturer parts under surveyor oversight"
      ],
      process: [
        "Tow or bring the damaged car to Shree Maruti Auto World and collect insurance documents.",
        "Prepare a computerized repair estimate and register the claim with the insurer.",
        "Coordinate the surveyor visit to inspect and document the vehicle damage.",
        "Obtain the approval to commence repairs and order genuine replacement parts.",
        "Perform repairs, submit final bills and satisfaction voucher, and deliver the vehicle."
      ],
      faqs: [
        {
          q: "What documents are required to file an accident claim?",
          a: "You will need the original Insurance Policy, Car Registration Certificate (RC), Driver's License of the person driving, and a copy of the FIR (if required by the insurer)."
        },
        {
          q: "How long does the surveyor approval process take?",
          a: "Typically, the surveyor inspects the car within 24-48 hours of filing, and approval is received within 1-2 working days after the inspection."
        }
      ]
    }
  },
  {
    slug: "car-washing",
    title: "Car Washing",
    category: "Maintenance",
    iconName: "Droplet",
    image: carWashingImg,
    description: "High-pressure foam wash, underbody cleaning, tire dressing, dashboard polish, and vacuuming.",
    inDepthDetails: {
      overview: "Restore your car's exterior shine and cabin cleanliness. Our Car Washing service uses high-pressure jet wash systems, premium snow foam shampoo, clean microfiber wash mitts, and underbody spray lances. We follow up the wash with deep interior vacuuming, plastic trim dressing, and tire cleaning.",
      features: [
        "High-pressure water pre-rinse to remove surface grit and dirt",
        "Thick snow foam application to encapsulate and lift surface grime",
        "Microfiber wash mitt hand scrubbing to prevent paint swirl marks",
        "High-pressure underbody cleaning to wash off corrosive salt and mud",
        "Interior vacuuming, window glass cleaning, and dashboard dressing"
      ],
      benefits: [
        "Removes road salt, mud, and dirt that can cause underbody corrosion",
        "Keeps the paint surface smooth and shiny, protecting paint clear coat",
        "Provides a clean, dust-free cabin environment for passenger health",
        "Dresses tires and vinyl trims to prevent cracking and UV fading"
      ],
      process: [
        "Pre-spray the vehicle with water to rinse off large mud accumulations.",
        "Apply snow foam shampoo and let it dwell to dissolve grease and dirt.",
        "Gently hand wash the body using two-bucket grid guard systems.",
        "Wash the underbody, wheel wells, and alloys using targeted jet sprays.",
        "Blow-dry gaps, wipe panels with plush microfibers, vacuum cabin, and dress trims."
      ],
      faqs: [
        {
          q: "Do you wash the underbody of the car?",
          a: "Yes, our wash package includes a thorough underbody wash using specialized angled pressure nozzles to remove mud and anti-rust debris."
        },
        {
          q: "Will automatic washing scratch my car?",
          a: "We perform a safe, manual multi-stage hand wash using clean microfibers, which is much safer and prevents the micro-scratches caused by automatic brush washers."
        }
      ]
    }
  },
  {
    slug: "car-detailing",
    title: "Car Detailing",
    category: "Cosmetics",
    iconName: "Sparkles",
    image: carDetailingImg,
    description: "Deep clay bar decontamination, 3-stage compound polishing, paint correction, trim restoration, and leather upholstery conditioning.",
    inDepthDetails: {
      overview: "Car detailing is an intensive process designed to restore your vehicle to a 'showroom-new' state. Our professional detailing services include deep paint decontamination with clay bars, multi-stage rotary compound polishing to erase swirl marks, plastic trim rejuvenation, interior seat steam extraction, and leather conditioning.",
      features: [
        "Paint decontamination using clay bars to remove tar, iron, and overspray",
        "Multi-stage machine paint correction to eliminate swirl marks and scratches",
        "Engine bay detailing, degreasing, and protective trim dressing",
        "Steam extraction cleaning of seat upholstery, carpet, and roof lining",
        "Premium leather cleaning and hydrophobic conditioner application"
      ],
      benefits: [
        "Restores deep, mirror-like paint reflection and rich color depth",
        "Eliminates 90%+ of light scratches, oxidation, water spots, and paint swirls",
        "Deep cleans and sanitizes the entire interior cabin, removing odors",
        "Creates a protective barrier on leather, vinyl, and plastic against cracking"
      ],
      process: [
        "Execute a thorough wash and dry, followed by iron-fallout chemical removal.",
        "Use detailing clay to smooth out contaminants embedded in the clear coat.",
        "Measure paint thickness and apply compound polish using dual-action machine polishers.",
        "Deep clean the cabin, extracting stains from seats and carpets with steam.",
        "Apply paint glaze sealant, dress engine/tires/exterior trims, and inspect under detailing lights."
      ],
      faqs: [
        {
          q: "What is paint correction?",
          a: "Paint correction is the mechanical leveling of the clear coat using abrasive polishes to remove paint defects like swirl marks, scratches, etching, and oxidation."
        },
        {
          q: "How long does a complete detailing package take?",
          a: "A full interior and exterior detailing package requires about 1 to 2 full days to execute all deep-cleaning and machine polishing steps properly."
        }
      ]
    }
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    category: "Cosmetics",
    iconName: "Gem",
    image: ceramicCoatingImg,
    description: "9H hard liquid nano-ceramic coating layer for high gloss paint protection, chemical repellence, and water-sheeting hydrophobic properties.",
    inDepthDetails: {
      overview: "Waxes and sealants wash off in a few months. Ceramic Coating is a liquid nano-technology polymer that chemically bonds with your vehicle's factory clear coat. Once cured, it forms a semi-permanent, glass-like 9H hard shield that repels water, UV rays, road salt, bird droppings, and industrial fallout for years.",
      features: [
        "Application of premium 9H nano-ceramic liquid coating on paintwork",
        "Detailed paint correction prep to remove all paint defects before sealing",
        "Hydrophobic layer application on exterior windshields and side glass",
        "High-temperature wheel ceramic coating to repel brake dust",
        "Infrared curing light treatment to accelerate coating bonding strength"
      ],
      benefits: [
        "Locks in a permanent, high-gloss wet-look shine that never needs wax",
        "Exceptional hydrophobic 'water-beading' properties, making washing extremely easy",
        "Protects paint from UV damage, color fading, acid rain, and chemical etching",
        "Reduces light micro-marring and washing swirl marks due to 9H hardness"
      ],
      process: [
        "Perform a full multi-stage paint wash, clay decontamination, and paint correction.",
        "De-grease and wipe the paint using Isopropyl Alcohol (IPA) to ensure bonding.",
        "Apply the ceramic liquid section-by-section using specialized applicator blocks.",
        "Level and buff the coating with clean microfibers to avoid high spots.",
        "Cure the vehicle under specialized infrared lamps and keep dry for 24 hours."
      ],
      faqs: [
        {
          q: "Does ceramic coating prevent stone chips?",
          a: "No, ceramic coating is too thin to absorb impacts from stones. To protect against stone chips and physical scratches, you need Paint Protection Film (PPF)."
        },
        {
          q: "How long does the ceramic coating last?",
          a: "Depending on the package selected and maintenance, our ceramic coatings provide durable protection lasting between 2 to 5 years."
        }
      ]
    }
  },
  {
    slug: "paint-protection-film",
    title: "Paint Protection Film (PPF)",
    category: "Cosmetics",
    iconName: "Layers",
    image: ppfImg,
    description: "Ultra-grade self-healing thermoplastic polyurethane (TPU) film to safeguard factory paint against road chips, key scratches, and oxidation.",
    inDepthDetails: {
      overview: "Paint Protection Film (PPF) is the ultimate protection for automotive paint. It is a thick, transparent thermoplastic polyurethane (TPU) film applied directly to the car's body panels. Featuring self-healing properties, the film absorbs impacts from gravel, stone chips, road debris, and key scratches, using heat (sunlight or hot water) to heal minor scratches.",
      features: [
        "Full or partial vehicle wrap using premium TPU self-healing films",
        "Precise plotter-cut templates to avoid cutting on the car's paint",
        "High stretching capability to wrap seamlessly around complex body curves",
        "UV-resistant, anti-yellowing adhesive layer to prevent discoloration",
        "Hydrophobic topcoat for easy cleaning and water repelling"
      ],
      benefits: [
        "Absorbs impact energy, protecting your car from stone chips and deep key scratches",
        "Self-heals swirl marks and minor scratches under warm sunlight or hot water",
        "Protects factory paint from harsh UV rays, road chemicals, and bugs",
        "Maintains the original factory paint original layer beneath, preserving maximum resale value"
      ],
      process: [
        "Thoroughly clean and clay decontaminate the car's paint panels.",
        "Polishing the paint to ensure a defect-free surface before wrapping.",
        "Squeegee apply the TPU film using specialized slip-solution and tack-solution.",
        "Wrap and tuck film edges inside panel gaps for an invisible, seamless install.",
        "Inspect all edges, post-heat the corners to lock adhesion, and cure."
      ],
      faqs: [
        {
          q: "Will the film yellow or peel over time?",
          a: "We only use high-grade TPU films with UV stabilizers. They are backed by a 5 to 10 year warranty against yellowing, cracking, bubbling, or peeling."
        },
        {
          q: "Can PPF be removed without damaging the paint?",
          a: "Yes, our premium films use paint-safe acrylic adhesives and can be cleanly peeled off using heat without leaving glue residue or lifting factory paint."
        }
      ]
    }
  },
  {
    slug: "interior-cleaning",
    title: "Interior Cleaning",
    category: "Maintenance",
    iconName: "Droplet",
    image: interiorCleaningImg,
    description: "Dashboard cleaning, roof lining shampooing, seat hot water extraction cleaning, floor mat steam sanitization, and AC vent deodorizing.",
    inDepthDetails: {
      overview: "A clean cabin ensures a healthy, comfortable drive. Our Interior Cleaning service goes deep into your car's carpets, seats, dashboard, and ventilation. We use professional hot-water extraction and steam cleaners to sanitize surfaces, extract deep dirt, clean headliners without sagging, and eliminate stubborn odors.",
      features: [
        "Deep carpet vacuuming and hot-water extraction shampooing",
        "Fabric seat stain extraction and leather seat cleaning",
        "Steam sanitization of dashboard, console, door cards, and vents",
        "Gentle dry-clean shampooing of the fabric roof lining (headliner)",
        "Interior glass cleaning and anti-bacterial cabin deodorizing treatment"
      ],
      benefits: [
        "Removes embedded allergens, dust mites, bacteria, and mold from fabric fibers",
        "Eliminates stale food, pet, and smoke odors from the cabin",
        "Restores a clean, fresh feel to seat fabrics, carpets, and plastics",
        "Safely sanitizes dashboard electronics and AC vents without water damage"
      ],
      process: [
        "Remove all floor mats, trash, and personal belongings from the cabin.",
        "Vacuum all carpets, seats, and crevices using high-suction machines.",
        "Apply enzymatic cleaner and extract dirt using a hot-water extraction machine.",
        "Steam clean AC vents, door seams, and dashboard plastic panels.",
        "Dry the seats, clean interior windows, apply matte trim protection, and deodorize."
      ],
      faqs: [
        {
          q: "How do you clean fabric seat stains?",
          a: "We apply safe cleaning solutions that break down the stain, scrub the fabric, and use a high-powered hot water extraction vacuum to pull out the dissolved dirt and water."
        },
        {
          q: "Will my roof lining sag after cleaning?",
          a: "No. We use dry-foam cleaning methods for the headliner with minimal moisture and zero heat, preventing the adhesive from dissolving."
        }
      ]
    }
  },
  {
    slug: "exterior-detailing",
    title: "Exterior Detailing",
    category: "Cosmetics",
    iconName: "Sparkles",
    image: exteriorDetailingImg,
    description: "Machine rubbing, dual action polishing, wax glaze sealant application, alloy wheel polishing, and windshield glass treatment.",
    inDepthDetails: {
      overview: "Bring back the original luster of your car's exterior body. Our Exterior Detailing service combines paint cleaning, machine compounding to remove surface defects, and finishing polishes. We seal the polished surface with premium polymer sealants or carnauba waxes to provide lasting shine and protection.",
      features: [
        "Machine paint rubbing to remove oxidized clear coat and paint overspray",
        "Dual-action machine polishing to restore depth and paint gloss",
        "Application of premium carnauba wax or synthetic polymer sealant",
        "Exhaust tips, alloy wheels, and chrome trim polishing",
        "Windshield glass polishing and hydrophobic rain repellent application"
      ],
      benefits: [
        "Restores a glossy, wet-look shine to faded or dull exterior paint",
        "Fills in micro-scratches and removes hard water spots and bird dropping stains",
        "Provides a protective wax barrier that repels water, road grime, and dust",
        "Polishes alloy wheels to remove stubborn, baked-on brake dust"
      ],
      process: [
        "Wash, clay decontaminate, and dry the entire exterior of the car.",
        "Tape off sensitive trim, rubber seals, and badges to prevent polish residue.",
        "Use a rotary polisher with compound pads to remove oxidation and deep spots.",
        "Finish polish using a dual-action buffer for a swirl-free, mirror finish.",
        "Apply a protective paint sealant, polish alloy rims/exhausts, and wipe down."
      ],
      faqs: [
        {
          q: "What is the difference between detailing and a regular car wash?",
          a: "A wash only removes loose dirt. Detailing decontaminates the clear coat, polishes out scratches, restores plastic/chrome, and applies durable protection."
        },
        {
          q: "How long does the wax protection last?",
          a: "Our premium polymer sealants and carnauba waxes provide durable protection and paint shine lasting between 3 to 6 months."
        }
      ]
    }
  },
  {
    slug: "computer-diagnostics",
    title: "Computer Diagnostics",
    category: "Repairs",
    iconName: "Gauge",
    image: computerDiagnosticsImg,
    description: "OBD-II scanner diagnostics to read engine fault codes, check sensor voltage, calibrate steering angle sensor, and scan ABS modules.",
    inDepthDetails: {
      overview: "When a warning light appears on your dashboard, your car is telling you something is wrong. Our Computer Diagnostics service uses the latest vehicle system scanners. We scan your vehicle's computers, retrieve Diagnostic Trouble Codes (DTCs), monitor live sensor streams, and run actuator tests to find the root cause of electrical or mechanical faults.",
      features: [
        "OBD-II scanner full-system diagnostic checks (Engine, Airbag, ABS, EPS)",
        "Reading and clearing of stored trouble codes and dashboard warning lights",
        "Live sensor tracking (MAF, O2, Throttle body, coolant temperature)",
        "Resetting service intervals and oil maintenance reminders",
        "Steering angle sensor, throttle body calibration and battery registration"
      ],
      benefits: [
        "Pinpoints the exact component failure, avoiding expensive guesswork",
        "Ensures electrical sensors are operating within manufacturer voltage specs",
        "Allows calibration of steering and throttle systems after parts replacement",
        "Provides a detailed fault code report for your vehicle records"
      ],
      process: [
        "Locate your vehicle's OBD-II port (typically under the dashboard) and plug in.",
        "Run an auto-scan check on all modules to extract active and stored error codes.",
        "Analyze real-time sensor streams while running the engine.",
        "Test individual electrical relays, actuator valves, and sensor outputs.",
        "Reset trouble codes, test drive, and verify the issue is resolved."
      ],
      faqs: [
        {
          q: "Will a diagnostic scan fix the dashboard warning lights?",
          a: "No, a scan retrieves the fault code so we know what needs repair. Clearing the code will turn off the light, but it will come back if the faulty part is not replaced."
        },
        {
          q: "Do you charge separately for a diagnostic scan?",
          a: "We charge a standard scanning fee, which is waived if you choose to have the recommended repairs completed at our workshop."
        }
      ]
    }
  }
];
