export type ProductCatalogSeedRecord = {
  product_family: string;
  product_name: string;
  short_description: string;
  capacity_range: string;
  voltage_or_ampacity: string;
  form_factor: string;
  cooling_notes: string;
  key_features: string;
  typical_triggers: string;
  likely_buyer_personas: string;
  relevant_verticals: string;
};

const mk = (product_family: string, product_name: string, short_description: string): ProductCatalogSeedRecord => ({
  product_family,
  product_name,
  short_description,
  capacity_range: "TBD by discovery",
  voltage_or_ampacity: "TBD by project",
  form_factor: "Standard / Modular",
  cooling_notes: "Assess thermal interaction with power topology where applicable",
  key_features: "Evidence-based fit scoring support",
  typical_triggers: "RFP, upgrades, expansions, capacity needs",
  likely_buyer_personas: "Facilities, critical operations, engineering, procurement",
  relevant_verticals: "Data center, public sector, healthcare, industrial, utilities"
});

export const PRODUCT_CATALOG_SEED: ProductCatalogSeedRecord[] = [
  mk("UPS Systems", "Liebert APM2", "Modular UPS for scalable critical power."),
  mk("UPS Systems", "PowerUPS 9000", "Enterprise UPS platform for resilient facilities."),
  mk("UPS Systems", "Trinergy UPS", "High efficiency UPS for large critical loads."),
  mk("Switchgear / Switchboards", "PowerBoard UL1558", "Low-voltage switchgear for mission critical distribution."),
  mk("Switchgear / Switchboards", "PowerBoard UL891", "Switchboard platform for robust electrical distribution."),
  mk("Switchgear / Switchboards", "PowerBoard Flex Quick Ship", "Accelerated delivery switchboard option."),
  mk("PDU / RPP", "Liebert PPC", "Conditioned power distribution cabinet."),
  mk("PDU / RPP", "Liebert TFX", "Transformer-free distribution option for data halls."),
  mk("PDU / RPP", "Liebert RXV", "Flexible row-level power distribution."),
  mk("Busway / Overhead Power Distribution", "Powerbar HPB", "Overhead busway distribution for scalable rack growth."),
  mk("Busway / Overhead Power Distribution", "PowerBar iMPB", "Intelligent modular power busway for rapid changes."),
  mk("Static Transfer Switches", "Liebert STS2", "Static transfer switch for critical load continuity."),
  mk("BESS / Grid-Scale Storage", "EnergyCore Grid", "Grid-scale storage platform for resilience and optimization."),
  mk("Prefabricated Data Centers - AI/HPC High Density", "OneCore", "High-density prefabricated module for AI workloads."),
  mk("Prefabricated Data Centers - AI/HPC High Density", "MegaMod HDX", "Large prefabricated AI/HPC data center module."),
  mk("Prefabricated Data Centers - AI/HPC High Density", "SmartMod HDX", "Compact high-density prefabricated compute block."),
  mk("Prefabricated Data Centers - Standard Density / Edge", "MegaMod", "Prefabricated data center for standard density scaling."),
  mk("Prefabricated Data Centers - Standard Density / Edge", "SmartMod", "Modular data center for edge and enterprise use cases."),
  mk("Prefabricated Data Centers - Standard Density / Edge", "SmartMod Max", "Expanded modular data center deployment model."),
  mk("Prefabricated Data Centers - Standard Density / Edge", "SmartRow 2", "Integrated row-based infrastructure for edge footprints."),
  mk("Whitespace Infrastructure", "SmartRun", "Overhead whitespace infrastructure for power and integration paths."),
  mk("Prefabricated Power Modules", "Power Module LV", "Factory-built low-voltage power module."),
  mk("Prefabricated Power Modules", "Power Module LV+MV", "Integrated LV+MV prefabricated power module."),
  mk("Power Skids", "Power Skid LV", "Low-voltage skid-based power distribution deployment."),
  mk("Power Skids", "Power Skid LV+MV", "Skid with low and medium voltage integration."),
  mk("Integrated UPS + Switchgear", "PowerNexus", "Integrated UPS and switchgear architecture."),
  mk("Lifecycle Services", "Startup & Commissioning", "Commissioning services for readiness and safe handover."),
  mk("Lifecycle Services", "Battery Services", "Battery testing, replacement, and lifecycle optimization."),
  mk("Lifecycle Services", "24/7 Emergency Response", "Rapid service response for unplanned critical events."),
  mk("Lifecycle Services", "Remote Monitoring", "Proactive remote monitoring and incident detection."),
  mk("Lifecycle Services", "Preventive Maintenance", "Scheduled maintenance to reduce failure risk."),
  mk("Lifecycle Services", "Modernization & Upgrades", "Upgrade pathways for aging critical infrastructure.")
];
