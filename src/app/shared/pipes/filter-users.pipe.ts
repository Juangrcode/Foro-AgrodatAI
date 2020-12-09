import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {
    transform(value: any, arg: any): any {
        if (arg === '' || arg.length < 2) return value;
        const resultPost = [];
        for (const tema of value) {
            if (
                tema.profile.user.toLowerCase().indexOf(arg.toLowerCase()) > -1
            ) {
                resultPost.push(tema);
            }
        }
        return resultPost;
    }
}
