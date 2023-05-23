export class constants {
    //    public static baseUrl = 'http://39ece283.ngrok.io/api/v1/';


    // public static baseUrl = 'http://ci.thrymr.net:8090/api/v1/';

    //   public static baseUrl = '/app/';

    //  public static baseUrl = 'https://atomcloud-test.apollotyres.com/v7/api/v1/';

    //  public static baseUrl = 'http://localhost:4200/api/vi/';


    //Ramesh IP Address
    //  public static baseUrl = 'http://192.168.1.213:8090/api/v1/';
    // public static baseUrl = 'http://ac083e24.ngrok.io/api/v1/';

    public static planStatus =
        [
            // {
            //     "key": "ALL", "value": ""
            // },
            {
                "key": "APPROVED", "value": "APPROVED"
            },
            {
                "key": "APPROVAL_PENDING", "value": "APPROVAL_PENDING"
            },
            {
                "key": "APPROVED_PART", "value": "APPROVED_PART"
            },
        ];
    public static filterPlanStatus = [
        "APPROVED",
        "APPROVED_PART",
        "APPROVAL_PENDING"
    ]
    public static fgsplanStatus =
        [
            {
                "key": "ALL", "value": ""
            },
            {
                "key": "APPROVED", "value": "APPROVED"
            },
            {
                "key": "APPROVED_PART", "value": "APPROVED_PART"
            },
        ];
    // public static gateSecurityGateEventsStatus={
    //     "gateIn":"GATED_IN",
    //     "gateOut":"GATED_OUT",
    //     "bay_assign":"BAY_ASSIGNED"
    // }

    public static draftedLoadlslipstatus = [
        {
            "key": "CREATED",
            "value": "CREATED"
        },
        {
            "key": "PRINTED",
            "value": "PRINTED"
        },
        {
            "key": "LOADING",
            "value": "LOADING"
        },
        {
            "key": "LOADED",
            "value": "LOADED"
        },
        {
            "key": "SENT_SAP",
            "value": "SENT_SAP"
        }
    ]

    public static viewLoadlslipstatus = [
        {
            "key": "INTRANSIT",
            "value": "INTRANSIT"
        },
        {
            "key": "UNLOADING",
            "value": "UNLOADING"
        },
        {
            "key": "DELIVERED",
            "value": "DELIVERED"
        },
        {
            "key": "COMPLETED",
            "value": "COMPLETED"
        }

    ]
    public static planStatusList = [
        {
            "key": 'OPEN',
            "value": 'OPEN'
        },
        {
            "key": "COMPLETED",
            "value": "COMPLETED"
        }
    ]

    public static freightExpiryDateFilterList = [
        {
            "key": 'BETWEEN',
            "value": 'BETWEEN'
        },
        {
            "key": "IS_NULL",
            "value": "IS NULL"
        }
    ]

    public static ReservedOrNotList = [
        {
            "key": 'WITH RESERVED',
            "value": true
        },
        {
            "key": "WITHOUT RESERVED",
            "value": false
        }
    ]

    public static gateSecurityFilterStatus =
        [
            {
                "key": "ALL", "value": ""
            },
            {
                "key": "APPROVED", "value": "APPROVED"
            },
            {
                "key": "APPROVAL_PENDING", "value": "APPROVAL_PENDING"
            },
            {
                "key": "APPROVED_PART", "value": "APPROVED_PART"
            },
        ];

    // Truck Inventory  status List 
    public static truckInventoryStatusList = [
        {
            "key": "GATED_IN", "value": "GATED_IN"
        },
        {
            "key": "REPORTED", "value": "REPORTED"
        },
        {
            "key": "LOADING", "value": "LOADING"
        },
        {
            "key": "LOADED", "value": "LOADED"
        },
        {
            "key": "ASSIGN_LS", "value": "ASSIGN_LS"
        }
        // {
        //     "key": "UnLoading", "value": "UNLOADING"
        // }
    ];
    public static truckHistoryStatusList = [
        {
            "key": "COMPLETED", "value": "COMPLETED"
        },
        {
            "key": "INTRANSIT", "value": "INTRANSIT"
        }
    ]
    public static rdcTruckReportStatus = [
        {
            "key": "GATED_IN", "value": "GATED_IN"
        },
        {
            "key": "REPORTED", "value": "REPORTED"
        },
        {
            "key": "UNLOADING", "value": "UNLOADING"
        },
        {
            "key": "DELIVERED", "value": "DELIVERED"
        }
        // {
        //     "key": "Loading", "value": "LOADING"
        // },
        // {
        //     "key": "Loaded", "value": "LOADED"
        // },
        // ,


    ]


    //Truck type page get the data status list 
    public static truckReportTypes = {
        "inventory": "INVENTORY",
        "history": "HISTORY"
    }



    // Define Roles 
    public static roles = {
        // planner
        "planner1": "DP_EXP",
        "plannner2": "DP_OEM",
        "planner3": "DP_REP",
        "L1MGR" : "L1_MGR",
        "L2MGR" : "L2_MGR",

        // Transporter
        "transporter": "TRP",
        // FGS-Operations
        "fgsOperations1": "PLT_PLN",
        "fgsOperations2": "PLT_3PL",
        // "fgsOperations3": "RDC_PLN",
        "fgsOperations4": "RDC_3PL",
        // Gate Security

        "gateSecurity": "PLT_GAT",


        // RDC ROLES 
        "rdc_PLN": "RDC_PLN",
        "rdc_GAT": "RDC_GAT",

        //JIT operation role
        "JIT_OPERATION": "JIT_PLN",
        "JIT_GATE_SECURITY": "JIT_GAT",
        //CHA Role For export
        "EXPORT_CHA": "CHA",
        //
        "ABU_PLN": "ABU_PLN",
        "ADMIN": "ADMIN",
        "FPL":"FPL"
    }


    public static indent_Filter_status_list = [
        { "key": "PARTIALLY_CONFIRMED", "value": "PARTIALLY_CONFIRMED" },
        { "key": "OPEN", "value": "OPEN" },
        { "key": "CANCELLED", "value": "CANCELLED" },
        { "key": "DECLINED", "value": "DECLINED" },
        { "key": "CLOSED", "value": "CLOSED" }
    ]

    public static bayStatusList = [
        "ARVD", "CALL", "LSPB", "LEPB", "RELEASE"
    ]
    public static rejectionList = ["NORMAL", "REJECTED"];

}

export enum loadslipEventsTriggers {
    draft = "DRAFT",
    print = "PRINT",
    arrived = "ARRIVED_BAY",
    loadingStart = "LOADING_START",
    loadingEnd = "LOADING_END",
    confirm = "CONFIRM",
    released = "RELEASED"
}
export enum loadslipStatus {
    created = "CREATED",
    printed = "PRINTED",
    loading = "LOADING",
    loaded = "LOADED",
    sentSAP = 'SENT_SAP',
    intransit = 'INTRANSIT',
    cancelled = "CANCELLED",
    completed = "COMPLETED",
    delivered = "DELIVERED",
    unloading = "UNLOADING"
}

export enum rdcReportTruckStatus {
    reported = "REPORTED",
    gateIn = "GATED_IN",
    unloading_start = "UNLOADING",
    unloading_end = "DELIVERED",
    intransit = "INTRANSIT"
}

