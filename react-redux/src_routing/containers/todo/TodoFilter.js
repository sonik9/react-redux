/**
 * Created by Vitalii on 9/21/2016.
 */
import React from 'react';
import Filter from './Filter';

const TodoFilter  = ()=>(
        <p>
            Show:
            {" "}
            <Filter filter="ALL">
                All
            </Filter>
            {", "}
            <Filter filter="SHOW_ACTIVE">
                Active
            </Filter>
            {", "}
            <Filter filter="SHOW_COMPLETED">
                Completed
            </Filter>
        </p>
        )


export  default TodoFilter;