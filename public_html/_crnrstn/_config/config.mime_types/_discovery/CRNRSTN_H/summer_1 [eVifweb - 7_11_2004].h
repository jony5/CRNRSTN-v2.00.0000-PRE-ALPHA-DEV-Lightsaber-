// summer_1.h : main header file for the PROJECT_NAME application
//

#pragma once

#ifndef __AFXWIN_H__
	#error include 'stdafx.h' before including this file for PCH
#endif

#include "resource.h"		// main symbols


// Csummer_1App:
// See summer_1.cpp for the implementation of this class
//
class Csummer_1App : public CWinApp
{
public:
	Csummer_1App();

// Overrides
	public:
	virtual BOOL InitInstance();

// Implementation

	DECLARE_MESSAGE_MAP()
};

extern Csummer_1App theApp;