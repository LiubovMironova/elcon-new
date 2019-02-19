


 const beginWork2 = async (tag) => {
        console.log(" this.state.currentUser = ", this.state.currentUser)
        let userFromBack =
            await fetch(PAGES.API.fetchUserArrayAbout.path, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: this.state.currentUser[0], tag: tag })
            });

        let userArrayAbout = await userFromBack.json()
        console.log(" userArrayAbout = ", userArrayAbout)
        //-----------------------------------------
        const services = await fetch(PAGES.API.fetchServices.path)
        const serviceList = await services.json();
        console.log(" serviceList = ", serviceList)

        let IDArr = Array(serviceList.length).fill(false)
        let servicesArr = Array(serviceList.length).fill(false)
        for (let i = 0; i < serviceList.length; i++) {
            IDArr[i] = serviceList[i][0];
            servicesArr[i] = serviceList[i][1]
        }

        await this.setState({ myServicesID: IDArr })
        await this.setState({ myServicesText: servicesArr })

        let choicesArr = Array(serviceList.length).fill(false)
        await this.setState({ choices: choicesArr })

        let choisesTemp = Array(serviceList.length).fill(false)
        for (let i = 0; i < this.state.myServicesID.length; i++) {
            for (let g = 0; g < userArrayAbout.length; g++) {
                if (this.state.myServicesID[i] == userArrayAbout[g]) {
                    choisesTemp[i] = true
                }
            }
        }
        await this.setState({ choices: choisesTemp })
        this.reWrite();
    }


    
    export {beginWork2, };