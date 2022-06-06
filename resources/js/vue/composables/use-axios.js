import {ref} from "vue";

export const useAxios = function () {
    const isPending = ref(null);
    const error = ref(null);
    const data = ref(null);

    // additional time
    const additionalTime = ref(null);
    //
    //
    const loadData = async function (
        requestMethod,
        url,
        data = {},
        config = {},
        options = {pending: true}
    ) {
        // is pending
        isPending.value = options.pending;

        // set is pending to null if not set
        if (isPending.value === undefined) {
            isPending.value = null;
        }

        try {
            const response = await axios.requestMethod(url, data, config);
            console.log('axios response is:', response);
            //
            //
            //
            //
            // handle errors
            if (response.status !== 200 && response.status !== 201) {

                console.log('what is data value: ', data.value)


                // throw new error with returned error messages
                throw new Error(
                    `Unable to fetch. ${response.statusText}`
                );
            }

            // data
            data.value = await response.json();

            // is pending set to false
            isPending.value = false;

            // return data
            console.log('axios data is:', data.value);
            return data.value;
        } catch (error) {
            isPending.value = false;
            error.value = err.message;
            console.log('Error message:', err)
            throw err;
        }
    }
    return {
        isPending,
        error,
        data,
        loadData,
    };
}
