$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2013 Q3',
            baseline: 10687,
            patientmetric: 4460,
            optimal: 2028
        },
            {
            period: '2013 Q3',
            baseline: 8432,
            patientmetric: 5713,
            optimal: 1791
        },
            {
            period: '2014 Q1',
            baseline: 2666,
            patient_metric: null,
            optimal: 2647
        }, {
            period: '2014 Q2',
            baseline: 2778,
            patientmetric: 2294,
            optimal: 2441
        }, {
            period: '2014 Q3',
            baseline: 4912,
            patientmetric: 1969,
            optimal: 2501
        }, {
            period: '2014 Q4',
            baseline: 3767,
            patientmetric: 3597,
            optimal: 5689
        }, {
            period: '2015 Q1',
            baseline: 6810,
            patientmetric: 1914,
            optimal: 2293
        }, {
            period: '2015 Q2',
            baseline: 5670,
            patientmetric: 4293,
            optimal: 1881
        }, {
            period: '2015 Q3',
            baseline: 4820,
            patientmetric: 3795,
            optimal: 1588
        }, {
            period: '2015 Q4',
            baseline: 15073,
            patientmetric: 5967,
            optimal: 5175
        }],
        xkey: 'period',
        ykeys: ['baseline', 'patientmetric', 'optimal'],
        labels: ['baseline', 'Patient Metric', 'Optimal'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Tests in progress",
            value: 12
        }, {
            label: "Tests completed",
            value: 30
        }, {
            label: "Tests not started",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Week 1',
            a: 100,
            b: 90
        }, {
            y: 'Week 2',
            a: 75,
            b: 65
        }, {
            y: 'Week 3',
            a: 50,
            b: 40
        }, {
            y: 'Week 4',
            a: 75,
            b: 65
        }, {
            y: 'Week 5',
            a: 50,
            b: 40
        }, {
            y: 'Week 6',
            a: 75,
            b: 65
        }, {
            y: 'Week 7',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
