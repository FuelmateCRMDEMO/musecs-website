import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      company,
      requirementType,
      projectDescription,
      legacySystems,
      targetTechStack,
      rolesRequired,
      developerHeadcount,
      desiredStartDate,
      expectedDuration,
      auditFocus
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full Name is required (minimum 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid corporate email address is required.' },
        { status: 400 }
      );
    }

    if (!requirementType || typeof requirementType !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Primary requirement type is required.' },
        { status: 400 }
      );
    }

    // Generate unique reference code for lead tracking
    const referenceCode = `MUS-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    // Log submitted enquiry for audit pipeline
    console.log(`[MuseCS Lead Capture] Reference: ${referenceCode}`, {
      timestamp: new Date().toISOString(),
      fullName,
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      requirementType,
      projectDescription: projectDescription || 'N/A',
      legacySystems: legacySystems || 'N/A',
      targetTechStack: targetTechStack || 'N/A',
      rolesRequired: rolesRequired || [],
      developerHeadcount: developerHeadcount || 'N/A',
      desiredStartDate: desiredStartDate || 'N/A',
      expectedDuration: expectedDuration || 'N/A',
      auditFocus: auditFocus || 'N/A'
    });

    return NextResponse.json(
      {
        success: true,
        referenceCode,
        message: 'Your technical enquiry has been routed directly to a Senior Software Architect in Sandton, Johannesburg. Expect a formal response within 4 business hours.',
        assignedLead: 'Senior Software Architect / Technical Client Director',
        expectedSlaHours: 4
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[MuseCS Lead Capture Error]', error);
    return NextResponse.json(
      { success: false, error: 'An internal error occurred processing your request. Please email sales@musecs.com directly.' },
      { status: 500 }
    );
  }
}
