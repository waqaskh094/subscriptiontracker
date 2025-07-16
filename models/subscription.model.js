import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{

    },
    price:{
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, "Price must be greater than 0"],
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'PKR'],
        default: 'USD' 
    }, 
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        enum : ['sports', 'new', 'entertainment', 'education', 'work'],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    }, 
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'], 
        default: 'active'
    }, 
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Start date must be in the past'
        }
    },
    renewelDate: {
        type: Date,
        validate: {
            validator: function (value) { 
                value <= new this.startDate
            },
            message: 'Renewel date must be after the start date'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }
}, {timestamps: true});

// Auto-calculate renewal date if missing:
// if error remove arrow function
subscriptionSchema.pre('save', function (next) {
    if(!this.renewelDate){
        const renewalPeriods = {
            daily: 1, 
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };
        this.renewelDate = new Date(this.startDate);
        this.renewelDate.setDate(this.renewelDate.getDate() + renewalPeriods[this.frequency]);

        //Auto-update the status if renewal date has passed
        if(this.renewelDate < new Date()) {
            this.status = 'expired';
        }

        next();

    }
});

const Subscription = mongoose.model('Subcription', subscriptionSchema);

export default Subscription;