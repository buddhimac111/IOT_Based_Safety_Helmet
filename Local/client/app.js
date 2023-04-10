const socket = io('ws://localhost:5000');

socket.on('warning', data => {
    const newlist = document.createElement("li");
    newlist.innerHTML =
        ` <div class="w-100 mb-3 pb-3 alertBox container-fluid">
                <div class="headerWarn p-3">
                    <i class="fa-solid fa-triangle-exclamation fa-beat-fade" style="font-size: 20px;"></i>
                </div>

                <div class="row">
                    <div class="col-lg-6 ps-4">
                        <table>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Date:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.date}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Detected Time:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.time}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Helmet ID:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.id}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Adit Level:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.adit}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-lg-6">
                        <table>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Oxygen:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.oxygen} %</p>
                                </td>
                                <td class="">
                                    <p class="txtSize ps-4" style="color:  ${data.colorOxygen};">${data.lvlOxygen}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Carbon Dioxide:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.co2} %</p>
                                </td>
                                <td class="">
                                    <p class="txtSize ps-4" style="color:  ${data.colorCo2};">${data.lvlCo2}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Hydrogen sulfide:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.h2s} %</p>
                                </td>
                                <td class="">
                                    <p class="txtSize ps-4" style="color:  ${data.colorH2s};">${data.lvlH2s}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Carbon Monoxide:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.co} %</p>
                                </td>
                                <td class="">
                                    <p class="txtSize ps-4" style="color:  ${data.colorCo};">${data.lvlCo}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">LP Gas:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.lpg} %</p>
                                </td>
                                <td class="">
                                    <p class="txtSize ps-4" style="color:  ${data.colorLpg};">${data.lvlLpg}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    <p class="txtTopic">Methane:</p>
                                </td>
                                <td class="">
                                    <p class="txtData ps-4">${data.methane} %</p>
                                </td>
                                <td class="">
                                    <p class="txtSize ps-4" style="color:  ${data.colorMethane};">${data.lvlMethane}</p>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
`;

    // Insert before existing child:
    const list = document.getElementById("myList");
    list.insertBefore(newlist, list.children[0]);



    console.log(data)
    play();

});
