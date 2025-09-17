import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/CommonComp/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Industries from "./Components/Industries/Industries";
import Resources from "./Components/Resaources/Resaources";
import Contact from "./Components/Contact/Contact";
import Careers from "./Components/Careers/Careers";
import HomePlayfair from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Community from "./Components/Community/Community";
import Taxes from "./Components/Services/ServicesInnerPages/Taxes/Taxes";
import AccountingServices from "./Components/Services/ServicesInnerPages/AccountingServices/AccountingServices";
import AdvisoryConsulting from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsulting";
import IncomeTaxPreparation from "./Components/Services/ServicesInnerPages/Taxes/TaxesInnerPage/IncomeTaxPreparation";
import BusinessTaxPreparation from "./Components/Services/ServicesInnerPages/Taxes/TaxesInnerPage/BusinessTaxPreparation";
import StateLocalTax from "./Components/Services/ServicesInnerPages/Taxes/TaxesInnerPage/StateAndLocalTax";
import IRSRepresentation from "./Components/Services/ServicesInnerPages/Taxes/TaxesInnerPage/IRSRepresentation";
import InternationalTax from "./Components/Services/ServicesInnerPages/Taxes/TaxesInnerPage/InternationalTax";
import EstateTrustTax from "./Components/Services/ServicesInnerPages/Taxes/TaxesInnerPage/EstateAndTrustTax";
import BookkeepingServices from "./Components/Services/ServicesInnerPages/AccountingServices/AccountingServicesInnerPages/BookkeepingServices";
import FinancialStatements from "./Components/Services/ServicesInnerPages/AccountingServices/AccountingServicesInnerPages/FinancialStatements";
import Payroll from "./Components/Services/ServicesInnerPages/AccountingServices/AccountingServicesInnerPages/Payroll";
import AuditAssurance from "./Components/Services/ServicesInnerPages/AccountingServices/AccountingServicesInnerPages/AuditAndAssurance";
import Crpto from "./Components/Services/ServicesInnerPages/AccountingServices/AccountingServicesInnerPages/Crypto";
import BusinessAdvisory from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsultingInnerPages/BusinessAdvisory";
import CFO from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsultingInnerPages/CFO";
import ControllershipServices from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsultingInnerPages/ControllershipServices";
import SuccessionPlanning from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsultingInnerPages/SuccessionPlanning";
import TaxFinancialPlanning from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsultingInnerPages/TaxAndFinancialPlanning";
import MAStrategy from "./Components/Services/ServicesInnerPages/AdvisoryConsulting/AdvisoryConsultingInnerPages/MAStrategy";
import SeniorTaxAccountant from "./Components/Careers/CareersJobPosition/SeniorTaxAccountant";
import AuditAssociate from "./Components/Careers/CareersJobPosition/AuditAssociate";
import BookkeepingSpecialist from "./Components/Careers/CareersJobPosition/BookkeepingSpecialist";
import AdministrativeAssistant from "./Components/Careers/CareersJobPosition/AdministrativeAssistant";
import OtherResources from "./Components/OtherResources/OtherResources";
import TermsAndConditions from "./Components/Terms/TermsAndConditions";
import PrivacyPolicy from "./Components/Terms/PrivacyPolicy";
import NoPage from "./Components/nopage/NoPage";
import Footer from "./Components/CommonComp/Footer/Footer";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePlayfair />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="categories" element={<Categories />} />
        <Route path="community" element={<Community />} />
        <Route path="services/accounting-services" element={<AccountingServices />} />
        <Route path="services/advisory-consulting" element={<AdvisoryConsulting />} />
        <Route path="services/taxes" element={<Taxes />} />
        <Route path="services/taxes/income-tax-preparation" element={<IncomeTaxPreparation />} />
        <Route path="services/taxes/business-tax-preparation" element={<BusinessTaxPreparation />} />
        <Route path="services/taxes/state-local-tax" element={<StateLocalTax />} />
        <Route path="services/taxes/IRS-representation" element={<IRSRepresentation />} />
        <Route path="services/taxes/international-tax" element={<InternationalTax />} />
        <Route path="services/taxes/estate-trust-tax" element={<EstateTrustTax />} />
        <Route path="services/accounting-services/bookkeeping-services" element={<BookkeepingServices />} />
        <Route path="services/accounting-services/financial-statements" element={<FinancialStatements />} />
        <Route path="services/accounting-services/payroll" element={<Payroll />} />
        <Route path="services/accounting-services/audit-assurance" element={<AuditAssurance />} />
        <Route path="services/accounting-services/crypto" element={<Crpto />} />
        <Route path="/services/advisory-consulting/business-advisory" element={<BusinessAdvisory />} />
        <Route path="/services/advisory-consulting/CFO" element={<CFO />} />
        <Route path="/services/advisory-consulting/controllership-services" element={<ControllershipServices />} />
        <Route path="/services/advisory-consulting/succession-planning" element={<SuccessionPlanning />} />
        <Route path="/services/advisory-consulting/tax-financial-planning" element={<TaxFinancialPlanning />} />
        <Route path="/services/advisory-consulting/M&A-strategy" element={<MAStrategy />} />
        <Route path="/contact/careers/senior-tax-accountant" element={<SeniorTaxAccountant />} />
        <Route path="/contact/careers/audit-associate" element={<AuditAssociate />} />
        <Route path="/contact/careers/bookkeeping-specialist" element={<BookkeepingSpecialist />} />
        <Route path="/contact/careers/administrative-assistant" element={<AdministrativeAssistant />} />
        <Route path="/other-resources" element={<OtherResources />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
